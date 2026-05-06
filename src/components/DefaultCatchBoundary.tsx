import { A } from "@solidjs/router";

export function DefaultCatchBoundary(props: { error: Error }) {
  console.error("DefaultCatchBoundary Error:", props.error);

  return (
    <div class="min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6">
      <div class="text-red-500">
        <p>{props.error?.message || "An error occurred"}</p>
      </div>
      <div class="flex gap-2 items-center flex-wrap">
        <A
          href="/"
          class="px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold"
        >
          Home
        </A>
      </div>
    </div>
  );
}