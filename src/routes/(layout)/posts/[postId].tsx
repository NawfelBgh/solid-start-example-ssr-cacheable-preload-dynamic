import { createAsync, RouteDefinition, useParams } from "@solidjs/router";
import { ErrorBoundary, Show, Suspense } from "solid-js";
import { fetchPost } from "~/utils/posts";
import { userLikeQuery, UserLikeQueryPreloadLink } from "~/utils/users";
import { clientOnly, HttpHeader } from "@solidjs/start";
import { PostErrorComponent } from "~/components/PostError";
import { isServer } from "solid-js/web";

const UserLike = clientOnly(() => import("~/components/UserLike"));

export const route = {
  preload: ({ params }) => {
    const postId = params['postId']!;
    fetchPost(postId);
    if (!isServer) {
      userLikeQuery(postId);
    }
  },
} satisfies RouteDefinition;

export default function Post() {
  const params = useParams();
  const post = createAsync(() => fetchPost(params.postId!), { deferStream: true });
  return (
    <ErrorBoundary fallback={(err) => <PostErrorComponent error={err} />}>
      <HttpHeader name="cache-control" value="public, max-age=600" />
      <div class="space-y-2">
        <h4 class="text-xl font-bold underline">
          {post()?.title}
          {" "}
          <Show when={isServer}>
            <UserLikeQueryPreloadLink postId={params.postId!} />
          </Show>
          <Suspense fallback="⌛">
            <UserLike fallback="⌛" postId={params.postId!} />
          </Suspense>
        </h4>
        <div class="text-sm">{post()?.body}</div>
      </div>
    </ErrorBoundary>
  );
}
