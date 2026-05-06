import { A } from "@solidjs/router";
import { createAsync } from "@solidjs/router";
import { For, JSXElement } from "solid-js";
import { fetchPosts } from "~/utils/posts";
import { useIsRouting } from "@solidjs/router";

export default function PostsLayout(props: { children: JSXElement }) {
  const posts = createAsync(() => fetchPosts());
  const isRouting = useIsRouting();

  return (
    <div class="p-2 flex gap-2">
      <ul class="list-disc pl-4">
        <For each={posts()}>
          {(post) => <li class="whitespace-nowrap">
            <A
              href={`/posts/${post.id}`}
              class="block py-1 text-blue-800 hover:text-blue-600"
              activeClass="text-black font-bold"
              preload
            >
              <div>{post.title.substring(0, 20)}</div>
            </A>
          </li>}
        </For>
      </ul>
      <hr />
      <div classList={{ "opacity-50": isRouting() }}>
          {props.children}
      </div>
    </div>
  );
}