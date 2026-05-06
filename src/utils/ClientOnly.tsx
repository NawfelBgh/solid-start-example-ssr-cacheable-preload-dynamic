import { createSignal, onMount, Show } from "solid-js";
import { isServer } from "solid-js/web";

export function ClientOnly(props: { fallback: any; children: any }) {
  const [isClient, setIsClient] = createSignal(!isServer);
  onMount(() => {
    if (!isClient()) {
        setIsClient(true);
    }
  });
  return <Show when={isClient} fallback={props.fallback}>
    {props.children}
  </Show>;
}