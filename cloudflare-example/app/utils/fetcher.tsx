import { getSession } from './session.server';
const fetcher = async (
  request: Request,
  endpoint: string,
  method: string,
  body?: any
) => {
  const session = await getSession(request.headers.get('Cookie'));
  const token: string = session.get('token');
  const baseUrl = 'https://nextline.dev';
  const response = await fetch(`${baseUrl}${endpoint}`, {
    method: method,
    body: body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
  });
  return  response;
};
export default fetcher;
