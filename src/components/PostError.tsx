export function PostErrorComponent(props: { error: Error }) {
  return (
    <div class="text-red-500">
      <p>{props.error?.message || "An error occurred"}</p>
    </div>
  );
}