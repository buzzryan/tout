import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { TOKEN_KEY } from "@/src/app/constant/common";

export async function POST() {
  const url = process.env.BACKEND_API_URL || "";

  const res = await fetch(url + `/me/profile/image`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get(TOKEN_KEY)?.value}`,
    },
  });

  if (res.ok) {
    const result = await res.json();
    return NextResponse.json(result, { status: 200 });
  }
  return new Response("Failed", { status: 400 });
}
