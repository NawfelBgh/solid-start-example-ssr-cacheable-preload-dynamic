import { createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import { userLikeQuery } from "~/utils/users";

export default function UserLike(props: { postId: string }) {
  const isLiked = createAsync(() => {
    console.log('createAsync - userLikeQuery', props.postId);
    return userLikeQuery(props.postId)
  });

  return <Show when={isLiked()} fallback="♡">❤️</Show>;
}