import { HttpHeader } from "@solidjs/start";

export default function PostsIndex() {
  return (
    <>
      <HttpHeader name="cache-control" value="public, max-age=600" />
      <div>Select a post.</div>
    </>
  );
}