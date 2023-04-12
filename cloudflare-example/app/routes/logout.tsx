import type { ActionArgs } from '@remix-run/cloudflare';
import { redirect } from '@remix-run/cloudflare';
import { logout } from '~/utils/session.server';

export const action = async ({ request }: ActionArgs) => {
  return logout(request);
};

export const loader = async () => {
  return redirect('/');
};
