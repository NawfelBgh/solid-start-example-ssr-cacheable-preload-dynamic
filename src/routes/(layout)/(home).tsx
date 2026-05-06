import { HttpHeader } from "@solidjs/start";

export default function Home() {
  return (
    <>
      <HttpHeader name="cache-control" value="public, max-age=600" />
      <HttpHeader name="x-custom" value="value" />
      <div class="p-2">
        <h3>Welcome Home!!!</h3>
      </div>
    </>
  );
}