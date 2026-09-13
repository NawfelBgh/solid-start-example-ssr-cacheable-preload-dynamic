import { RouteSectionProps } from "@solidjs/router";
import { isServer } from "@solidjs/web";
import { Loading, Show } from "solid-js";
import UserInfo from "~/components/UserInfo";
import { UserQueryPreloadLink } from "~/utils/users";

export default function Layout(props: RouteSectionProps) {
  return (
    <>
      <div class="p-2 flex gap-2 text-lg">
        <a href="/">Home</a>{" "}
        <a href="/posts">Posts</a>{" "}
        <Show when={isServer}>
          <UserQueryPreloadLink />
        </Show>
        <Loading fallback="⌛">
          <UserInfo />
        </Loading>
      </div>
      <hr />
      {props.children}
    </>
  );
}