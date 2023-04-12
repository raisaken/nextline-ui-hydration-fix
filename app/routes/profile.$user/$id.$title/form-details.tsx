import { Box, Button, Typography } from '@mui/material';
import {
  CatchBoundaryComponent,
  Form,
  useActionData,
  useLoaderData,
} from '@remix-run/react';
// 
import ComboButton from '~/src/components/button/combo-button';
import { FormField } from '~/src/components/form-field';
import { leaf } from '~/src/mock/fields';
import { theme } from '~/styles/theme';
import fetcher from '~/utils/fetcher';
import urls from '~/api/endpoint';
import { ActionArgs, LoaderArgs, redirect , ActionFunction} from '@remix-run/cloudflare';
import { useTransition } from '@remix-run/react';
import * as Z from 'zod';
import validation from '~/utils/validation';

const schema = Z.object({
  contentTitle: Z.string().nonempty('Content Title is required'),
  genre: Z.string(),
  contentVisibility: Z.string(),
  contentRating: Z.string(),
  maxNoOfLines: Z.string(),
  storyBehind: Z.string(),
  leafSubtype: Z.string(),
});

export async function loader({ params, request }: LoaderArgs) {
  const leaf__detail = await fetcher(
    request,
    urls.content.get_content_by_id.replace(':id', params?.id),
    'GET'
  );
  if (!leaf__detail) {
    throw new Response('User not Found, form-detail', { status: 404 });
  }
  return { leaf__detail };
}

export const CatchBoundary: CatchBoundaryComponent = ({ error }) => {
  // import { useTransition } from 'react';
  return <>{error}, Error on form detail</>;
};

export const action: ActionFunction = async ({
  request,
  params,
}: ActionArgs) => {
  const form = await request.formData();

  const { formData, errors } = await validation({
    form,
    schema,
  });
  if (errors) {
    return errors;
  }
  const body = JSON.stringify(formData);
  const res = await fetcher(
    request,
    urls.content.get_content_by_id.replace(':id', params.id),
    'PATCH',
    body
  );
  // return null;
  return redirect(
    `/profile/${params.user}/${params.id}/${formData?.contentTitle}`
  );
};

function FormDetails() {
  const data = useActionData();
  const { leaf__detail } = useLoaderData<typeof loader>();
  const transition = useTransition();
  console.log(
    transition.state,
    transition.type,
    transition.submission,
    transition.location
  );

  return (
    <Form method="post" style={{ padding: '16px' }}>
      <Box
        sx={{
          width: '100%',
        }}
        className="scrollbar-hidden"
      >
        <Box display="flex" justifyContent="space-between" sx={{ pb: 4 }}>
          <Typography
            sx={{
              fontWeight: '700',
              fontSize: '20px',
              lineHeight: '24px',
              color: theme.palette.primary.main,
            }}
          >
            Add Content Details
          </Typography>
        </Box>
        <Box
          sx={{
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {leaf?.map((item, idx) => (
            <FormField
              key={idx}
              fullWidth
              label={item.label}
              name={item.name}
              required={item.required}
              defaultValue={leaf__detail[`${item.name}`] || item.value}
              variant="outlined"
              type={item.type}
              options={item.options}
              error={data ? (data[item.name] ? true : false) : null}
              helperText={data ? data[item.name] : null}
            />
          ))}

          <Box display="flex" justifyContent="flex-end" mb={4}>
            <ComboButton name="_action" value="update_details" />
          </Box>
        </Box>
      </Box>
    </Form>
  );
}

export default FormDetails;
