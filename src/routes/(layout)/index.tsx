import { httpHeader } from "@solidjs/web";

export default function Home() {
  httpHeader("cache-control", "public, max-age=600");
  httpHeader("x-custom", "value");
  return (
    <div class="p-2">
      <h3>Welcome Home!!!</h3>
    </div>
  );
}