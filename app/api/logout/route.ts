import { cookies } from 'next/headers'
import {tokenKey} from "@/app/api/login/route";

export async function POST() {
    cookies().delete(tokenKey)
    return new Response("logout completed", { status: 200 })
}
