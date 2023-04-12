import { createCookieSessionStorage,redirect} from "@remix-run/cloudflare";

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "token-session",
    },
  });
export async function logout(request: Request) {
  const session = await getSession(request.headers.get('Cookie'));
  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}


export async function getIsSignedIn(request: Request) {
  const session = await getSession(request.headers.get('Cookie'));
  const token: string = session.get('token');
  let isSignedIn
  if (token) {
    isSignedIn = true
  }
  return isSignedIn
}