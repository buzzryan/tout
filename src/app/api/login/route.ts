'use server'
import {cookies} from 'next/headers'
import dayjs from "dayjs";
import {TOKEN_KEY} from "@/src/app/constant/common";

export async function POST(request: Request) {
    const formData = await request.formData()
    const body = {
        username: formData.get("username"),
        password: formData.get("password"),
    }
    const url = process.env.BACKEND_API_URL || ""

    const res = await fetch(
        url + "/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }
    )

    if (res.ok) {
        const result = await res.json()
        const cookieStore = cookies()
        cookieStore.set(TOKEN_KEY, result.token, {expires: dayjs().add(4, "weeks").toDate()})
        return new Response("Success", {status: 200})
    }
    return new Response("Failed", {status: 400})
}
