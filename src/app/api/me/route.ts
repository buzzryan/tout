import { getMe } from "@/src/fetcher/profile";

export async function GET() {
  const res = await getMe();
  return new Response(JSON.stringify(res), { status: 200 });
}
