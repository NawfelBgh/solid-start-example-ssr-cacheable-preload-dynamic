import { useIsRouting } from "@solidjs/router";
import { createMemo, Element, For } from "solid-js";
import { fetchPosts } from "~/utils/posts";

export default function PostsLayout(props: { children: Element }) {
  const posts = createMemo(() => fetchPosts());
  const isRouting = useIsRouting();

  return (
    <div class="p-2 flex gap-2">
      <ul class="list-disc pl-4">
        <For each={posts()}>
          {(post) => <li class="whitespace-nowrap">
            <a
              href={`/posts/${post.id}`}
              class="block py-1 text-blue-800 hover:text-blue-600"
            >
              <div>{post.title.substring(0, 20)}</div>
            </a>
          </li>}
        </For>
      </ul>
      <hr />
      <div class={{ "opacity-50": isRouting() }}>
        {props.children}
      </div>
    </div>
  );
}