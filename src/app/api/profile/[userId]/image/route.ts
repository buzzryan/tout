import { getProfileImage } from "@/src/fetcher/profile";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { userId: string } },
) {
  const url = await getProfileImage(params.userId);
  return NextResponse.json({ url: url }, { status: 200 });
}
