import { cookies } from 'next/headers'

export const tokenKey = "t"

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
        cookieStore.set(tokenKey, result.token)
        return new Response("Success", { status: 200 })
    }
    return new Response("Failed", { status: 400 })
}
