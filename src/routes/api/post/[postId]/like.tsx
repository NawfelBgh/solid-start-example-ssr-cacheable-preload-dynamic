import type { APIEvent } from "@solidjs/start/server";

export async function GET({ params }: APIEvent) {
  // Get user info from session
  console.info(`Checking if user liked post id ${params.postId}...`);

  // Make the response extra slow for testing
  await new Promise(resolve => setTimeout(resolve, 2_000));

  return new Response("true");
}