import { RouteSectionProps } from "@solidjs/router";
import { A } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import { Show, Suspense } from "solid-js";
import { isServer } from "solid-js/web";
import { UserQueryPreloadLink } from "~/utils/users";

const UserInfo = clientOnly(() => import("~/components/UserInfo"));

export default function Layout(props: RouteSectionProps) {
  return (
    <>
      <div class="p-2 flex gap-2 text-lg">
        <A
          href="/"
          activeClass="font-bold"
          end
        >
          Home
        </A>{" "}
        <A
          href="/posts"
          activeClass="font-bold"
        >
          Posts
        </A>{" "}
        <Show when={isServer}>
          <UserQueryPreloadLink />
        </Show>
        <Suspense fallback="⌛">
          <UserInfo fallback="⌛" />
        </Suspense>
      </div>
      <hr />
      {props.children}
    </>
  );
}
