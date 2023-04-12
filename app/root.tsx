import type { LoaderArgs, MetaFunction } from '@remix-run/cloudflare';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { createHead } from 'remix-island';
import style from 'react-toastify/dist/ReactToastify.css';
import styles from '~/styles/global.css';
import { removeFromStorage } from './src/config/local-storage';
import urls from './api/endpoint';
import fetcher from './utils/fetcher';
import { getSession } from './utils/session.server';
import AppLayout from './src/components/layout/app_layout';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: style },
  ];
}

export const loader = async ({ request }: LoaderArgs) => {
  let userObject;
  let username;
  const session = await getSession(request.headers.get('Cookie'));
  const token: string = session.get('token');

  if (!token) {
    removeFromStorage('user');
  } else {
    const user = await fetcher(request, urls.auth.me, 'GET');
    userObject = await user.json();
    if (typeof userObject === 'object' && userObject !== null) {
      username = userObject.username;
    }
  }
  // if (!user) {
  //   throw new Response('User not Found, root', { status: 404 });
  // }
  return { userObject, username };
};

export const Head = createHead(() => (
  <>
    <Meta />
    <Links />
  </>
));

export default function App() {
  return (
    <>
      <Head />
      <AppLayout>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </AppLayout>
    </>
  );
}

export function CatchBoundary() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>This is a catch boundary!</h1>
      <p>
        <a href="/">Go back home</a>
      </p>
    </div>
  );
}
