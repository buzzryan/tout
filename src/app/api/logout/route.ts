import { cookies } from 'next/headers'
import {TOKEN_KEY} from "@/src/app/constant/common";

export async function POST() {
    cookies().delete(TOKEN_KEY)
    return new Response("logout completed", { status: 200 })
}
