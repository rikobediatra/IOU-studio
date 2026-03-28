import { cookies } from "next/headers";

async function getTokenFromServer() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return null;
  }
  return token;
}

export { getTokenFromServer };
