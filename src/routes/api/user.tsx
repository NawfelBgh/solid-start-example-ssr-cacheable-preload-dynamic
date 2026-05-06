import type { APIEvent } from "@solidjs/start/server";

export async function GET({ request }: APIEvent) {
  // Get user info from session
  console.info('Fetching user information');
  
  // Make the response extra slow for testing
  await new Promise(resolve => setTimeout(resolve, 2_000));
  
  return new Response(JSON.stringify({
    id: 1,
    name: "UserName",
    profilePic: "https://www.loremfaces.net/24/id/1.jpg"
  }));
}