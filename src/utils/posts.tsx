import { query } from "@solidjs/router";
import { GET } from "@solidjs/web/server-functions";

export type PostType = {
  id: string
  title: string
  body: string
}

export const fetchPosts = query(GET(async function fetchPosts(): Promise<PostType[]> {
  "use server";
  console.info("Fetching posts...");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await res.json();
  return (posts as Array<PostType>).slice(0, 10);
}), "posts");

export const fetchPost = query(GET(async function fetchPost(postId: string): Promise<PostType> {
  "use server";
  console.info(`Fetching post with id ${postId}...`);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (!res.ok) {
    if (res.status === 404) {
      throw new Error(`Post ${postId} does not exist`);
    }
    throw new Error("Failed to fetch post");
  }

  const post = await res.json();
  return post as PostType;
}), "post");