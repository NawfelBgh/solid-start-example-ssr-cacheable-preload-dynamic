import { Link } from "@solidjs/meta";
import { query } from "@solidjs/router";
import { toJSON } from "seroval";

export type UserType = {
  id: number
  name: string
  profilePic: string
}

const fetchOptions = { credentials: "include", mode: "no-cors" } as const;

async function fetchUser(): Promise<UserType> {
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
}

export const userQuery = query(fetchUser, "user");

export function UserQueryPreloadLink() {
  return <Link rel="preload" href={(fetchUser as unknown as { url: string}).url} as="fetch" />;
}

function getUserLikeApiRoutePath(postId: string) {
  return `/api/post/${postId}/like`;
}

async function fetchUserLike(postId: string): Promise<boolean> {
   "use server";
   // Get user info from session
  console.info(`Checking if user liked post id ${postId}...`);

  // Make the response extra slow for testing
  await new Promise(resolve => setTimeout(resolve, 2_000));

  return true;
}

export const userLikeQuery = query(fetchUserLike, "userLike");

export function UserLikeQueryPreloadLink(props: { postId: string }) {
  // FIXME We need a native utility function to get server component URL for given args
  return <Link rel="preload" href={(fetchUserLike as unknown as { url: string}).url + `&args=${encodeURIComponent(JSON.stringify(toJSON([props.postId])))}`} as="fetch" />;
}
