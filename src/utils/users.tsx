import { Link } from "@solidjs/meta";
import { query } from "@solidjs/router";
import { GET, serverFunctionUrl } from "@solidjs/web/server-functions";

export type UserType = {
  id: number
  name: string
  profilePic: string
}

export const fetchUser = GET(async function fetchUser(): Promise<UserType> {
  "use server";
  // Get user info from session
  console.info('Fetching user information');

  // Make the response extra slow for testing
  await new Promise(resolve => setTimeout(resolve, 2_000));

  return {
    id: 1,
    name: "UserName",
    profilePic: "https://www.loremfaces.net/24/id/1.jpg"
  };
});

export const userQuery = query(fetchUser, "user");

export function UserQueryPreloadLink() {
  return <Link rel="preload" href={serverFunctionUrl(fetchUser)} as="fetch" crossorigin />;
}

const fetchUserLike = GET(async function fetchUserLike(postId: string): Promise<boolean> {
  "use server";
  // Get user info from session
  console.info(`Checking if user liked post id ${postId}...`);

  // Make the response extra slow for testing
  await new Promise(resolve => setTimeout(resolve, 2_000));

  return true;
});

export const userLikeQuery = query(fetchUserLike, "userLike");

export function UserLikeQueryPreloadLink(props: { postId: string }) {
  return <Link rel="preload" href={serverFunctionUrl(fetchUserLike, props.postId)} as="fetch" crossorigin />;
}
