import Split from 'react-split';
import { LoaderArgs, redirect } from '@remix-run/cloudflare';
import ContributionBox from '~/src/components/contribution/contribution-box';
import style from '~/src/styles/contribution-style.css';
import Leaf from '~/src/components/contribution/leaf';
import {
  CatchBoundaryComponent,
  Form,
  Outlet,
  useActionData,
} from '@remix-run/react';
import fetcher from '~/utils/fetcher';
import urls from '~/api/endpoint';
import { ActionArgs } from '@remix-run/cloudflare';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import Status from '~/src/config/status';

export const loader = async ({ request, params }: LoaderArgs) => {
  const url = new URL(request.url);
  const content = await fetcher(
    request,
    urls.content.get_content_by_id.replace(':id', params.id),
    'GET'
  );
  if (!content) {
    throw new Response('User not Found, contribution', { status: 404 });
  }
  return content;
};
export const CatchBoundary: CatchBoundaryComponent = ({ error }) => {
  return <>{error}, Error on contribution</>;
};

export async function action({ request, params }: ActionArgs) {
  let res;
  const form = await request.formData();
  const { _action, ...values } = Object.fromEntries(form);
  if (_action === 'post_comment') {
    let body = JSON.stringify({
      contentId: params.id,
      ...values,
    });
    fetcher(request, urls.content.comment_by_id, 'POST', body);
  } else if (_action === 'update_line') {
    const lineNumber = form.get('lineNumber');
    const lineId = form.get('lineId');
    const line = form.get('lineData');
    const body = JSON.stringify({
      lineData: line,
      isSelected: false,
      lineNumber: lineNumber,
    });
    const endpoint = urls.line.leaf_line_id.replace(':id', lineId);
    res = await fetcher(request, endpoint, 'PUT', body);
  } else if (_action === 'add_line') {
    const line = form.get('lineData');
    const lineNumber = form.get('lineNumber');
    const body = JSON.stringify({
      lineData: line,
      lineNumber,
      contentId: params.id,
      isSelected: false,
    });
    res = await fetcher(request, urls.line.leaf_line, 'POST', body);
  } else if (_action === 'filter_leaf') {
    const searchParams = new URLSearchParams();

    Object.keys(values).forEach(function (key) {
      searchParams.set(key, values[key]);
    });

    return redirect(
      `/contribution/${params.id}/${params.title}?${searchParams}`
    );
  }
  return res?.status || null;
}

export const links = () => {
  return [{ rel: 'stylesheet', href: style }];
};

export default function Contribution() {
  let res = useActionData();
  useEffect(() => {
    if (res) {
      const displayText = 'Line updated';
      Status(res, displayText);
    }
  }, [res]);
  return (
    <Split
      className="split"
      sizes={[20, 50, 30]}
      minSize={250}
      style={{ height: '90vh' }}
    >
      <Leaf />
      <ContributionBox />
      <Box sx={{ p: 2, backgroundColor: '#fcfcfc' }}>
        <Form method="post">
          <Outlet />
        </Form>
      </Box>
    </Split>
  );
}
