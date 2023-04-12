import Split from 'react-split';
import Profile from '~/src/components/profile/profile';
import Leafs from '~/src/components/leaf/leafs';
import { Outlet } from 'react-router';
import fetcher from '~/utils/fetcher';
import urls from 'app/api/endpoint';
import style from '~/src/styles/profile.css';
import { CatchBoundaryComponent } from '@remix-run/react';
import {
  ActionArgs,
  ActionFunction,
  LoaderArgs,
  redirect,
} from '@remix-run/cloudflare';
export const links = () => {
  return [{ rel: 'stylesheet', href: style }];
};

// import type { / } from '@remix-run/clouflare';
export const action: ActionFunction = async ({
  request,
  params,
}: ActionArgs) => {
  const form = await request.formData();
  const { _action, ...values } = Object.fromEntries(form);
  if (_action === 'filter_leafs') {
    const searchParams = new URLSearchParams();

    Object.keys(values)
      .filter((item) => values[item] !== '')
      .forEach(function (key) {
        searchParams.set(key, values[key]);
      });

    return redirect(`/profile/${params.user}?${searchParams}`);
  }
  return null;
};

export const loader = async ({ request, params }) => {
  const username = params.user;

  const url = new URL(request.url);

  const user = await fetcher(
    request,
    urls.user.user_info.replace(':username', username),
    'GET',
  );
  const userObject = await user.json();

  const leafs = await fetcher(
    request,
    urls.content.filtered_content +
      `?creator_id=${userObject.id}` +
      `&${url.searchParams}`,
    'GET',
  );
  const leafObject = await leafs?.json();
  if (!user) {
    throw new Response('User not Found profile.$user', { status: 404 });
  } else if (!leafs) {
    throw new Response('leafs not Found profile.$user', { status: 404 });
  }
  return { leafObject, userObject };
};

export const CatchBoundary: CatchBoundaryComponent = ({ error }) => {
  return <>{error}, Error on profile $user</>;
};

function profile() {
  return (
    <Split className="split" sizes={[20, 30, 50]} minSize={100}>
      <Profile />
      <Leafs />
      <div style={{ backgroundColor: '#fcfcfc' }}>
        <Outlet />
      </div>
    </Split>
  );
}

export default profile;
