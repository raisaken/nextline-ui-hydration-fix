import type { ActionArgs, LoaderArgs } from '@remix-run/cloudflare';
import { redirect } from '@remix-run/cloudflare';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'node_modules/react-toastify/dist/ReactToastify.css';
import * as Z from 'zod';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Form, useActionData, useCatch } from '@remix-run/react';
import { getSession, commitSession } from '~/utils/session.server';
import validateAction from '~/utils/validate-action';
import { UserType } from '~/src/config/types';
import Status from '~/src/config/status';
import { useEffect } from 'react';

interface LoginForm {
  username: string;
  password: string;
}

interface ValidationResult {
  formData: { [k: string]: FormDataEntryValue } | LoginForm;
  errors: Partial<Record<never, string>> | null;
}
interface tokenType {
  access_token: string;
}

const schema = Z.object({
  username: Z.string().email('Invalid email').nonempty('Email is required'),
  password: Z.string().nonempty('Password is required'),
});
export const loader = async ({ request }: LoaderArgs) => {
  const session = await getSession(request.headers.get('Cookie'));
  const token: string = session.get('token');
  if (token) {
    return redirect('/');
  }
  return null;
};

export const action = async ({ request }: ActionArgs) => {
  const { formData, errors }: ValidationResult = await validateAction({
    request,
    schema,
  });
  if (errors) {
    return { errors };
  }

  let formDatas = new FormData();
  formDatas.append('username', formData.username);
  formDatas.append('password', formData.password);

  const res = await fetch('https://nextline.dev/auth/jwt/login', {
    method: 'POST',
    body: formDatas,
  });

  const data: tokenType = await res.json();
  const session = await getSession(request.headers.get('Cookie'));
  session.set('token', data?.access_token);
  const cookie = await commitSession(session);
  let user;
  if (data.access_token) {
    user = await fetch('https://nextline.dev/users/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${data.access_token}`,
      },
    });
  } else {
    // throw new Response('Error', { status: 404 })
  }

  const userData: UserType | undefined = await user?.json();
  if (userData) {
    return redirect(`/profile/${userData?.username}`, {
      headers: {
        'Set-Cookie': cookie,
      },
    });
  }
  const responseStatus = res.status;
  return { responseStatus, data };
};

export default function Login() {
  const { responseStatus, errors } = useActionData() ?? {};
  const theme = createTheme();
  const displayText = 'logged in';
  useEffect(() => {
    if (responseStatus) {
      Status(responseStatus, displayText);
    }
  }, [responseStatus]);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box sx={{ mt: 1 }}>
            <Form method="post">
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="username"
                autoComplete="email"
                autoFocus
                error={Boolean(errors?.username ? true : false)}
                helperText={errors ? errors.username : null}
              />

              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={Boolean(errors?.password ? true : false)}
                helperText={errors ? errors.password : null}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Typography style={{ color: '#d32f2f' }} variant="subtitle2">
                {/* {data?.detail ? 'Email or password is incorrect' : null} */}
              </Typography>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Form>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
// export function CatchBoundary() {
//   const caught = useCatch();
//   console.log(caught,'this is ')
//   if(caught?.data)
//   {}
//   toast(caught.data)

//   return (
//     <div style={{backgroundColor:'red',height:'50px',width:'100%'}}>
//     <ToastContainer
//     position="bottom-right"
//     autoClose={5000}
//     hideProgressBar={false}
//     newestOnTop={false}
//     closeOnClick
//     rtl={false}
//     pauseOnFocusLoss
//     draggable
//     pauseOnHover
//     theme="light"
//   />
//   </div>
//   );
// }
