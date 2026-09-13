import { useParams } from "@solidjs/router";
import { defineFileRoute } from "@solidjs/router/fs";
import { httpHeader, isServer } from "@solidjs/web";
import { createMemo, Errored, Loading, Show } from "solid-js";
import { PostErrorComponent } from "~/components/PostError";
import UserLike from "~/components/UserLike";
import { fetchPost } from "~/utils/posts";
import { userLikeQuery, UserLikeQueryPreloadLink } from "~/utils/users";

export const route = defineFileRoute("/posts/:postId", {
  preload: ({ params }) => {
    const postId = params["postId"]!;
    if (!isServer) {
      void userLikeQuery(postId);
    }
    return fetchPost(postId);
  },
});

export default function Post() {
  httpHeader("cache-control", "public, max-age=600");
  const params = useParams();
  const post = createMemo(() => fetchPost(params["postId"]!));
  return (
    <Errored fallback={(err) => <PostErrorComponent error={err() as Error} />}>
      <div class="space-y-2">
        <h4 class="text-xl font-bold underline">
          {post()?.title}
          {" "}
          <Show when={isServer}>
            <UserLikeQueryPreloadLink postId={params["postId"]!} />
          </Show>
          <Loading fallback="⌛">
            <UserLike postId={params["postId"]!} />
          </Loading>
        </h4>
        <div class="text-sm">{post()?.body}</div>
      </div>
    </Errored>
  );
}