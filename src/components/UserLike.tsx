import { createMemo, Show } from "solid-js";
import { userLikeQuery } from "~/utils/users";

export default function UserLike(props: { postId: string }) {
  const isLiked = createMemo(() => userLikeQuery(props.postId), { ssrSource: "client" });

  return <Show when={isLiked()} fallback="♡">❤️</Show>;
}