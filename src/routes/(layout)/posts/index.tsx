import { httpHeader } from "@solidjs/web";

export default function PostsIndex() {
  httpHeader("cache-control", "public, max-age=600");
  return <div>Select a post.</div>;
}