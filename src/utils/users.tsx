import { Link } from "@solidjs/meta";
import { query } from "@solidjs/router";

export type UserType = {
  id: number
  name: string
  profilePic: string
}

const fetchOptions = { credentials: "include", mode: "no-cors" } as const;

function getUserApiRoutePath() {
  return "/api/user";
}

export const userQuery = query(async () => {
  return fetch(getUserApiRoutePath(), fetchOptions).then((response) => response.json() as Promise<UserType>);
}, "user");

export function UserQueryPreloadLink() {
  return <Link rel="preload" href={getUserApiRoutePath()} as="fetch" />;
}

function getUserLikeApiRoutePath(postId: string) {
  return `/api/post/${postId}/like`;
}

export const userLikeQuery = query(async (postId: string) => {
  return fetch(getUserLikeApiRoutePath(postId), fetchOptions).then((response) => response.json() as Promise<boolean>);
}, "userLike");

export function UserLikeQueryPreloadLink(props: { postId: string }) {
  return <Link rel="preload" href={getUserLikeApiRoutePath(props.postId)} as="fetch" />;
}
