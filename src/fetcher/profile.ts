import {cookies} from "next/headers";
import {TOKEN_KEY} from "@/src/app/constant/common";

interface GetProfileImageRes {
    url: string
}

export async function getProfileImage(userId: string): Promise<string> {
    const url = process.env.BACKEND_API_URL || ""

    const res = await fetch(
        url + `/users/${userId}/profile/image`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        }
    )

    const responseBody = await res.json()
    if (!res.ok) {
        throw new Error("Failed to fetch profile image", {cause: responseBody})
    }

    return (responseBody as GetProfileImageRes).url
}

interface GetMeRes {
    id: string
    username: string
}

export async function getMe(): Promise<GetMeRes> {
    const url = process.env.BACKEND_API_URL || ""

    const res = await fetch(
        url + "/me",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${cookies().get(TOKEN_KEY)?.value}`,
            },
        }
    )

    const responseBody = await res.json()
    if (!res.ok) {
        throw new Error("Failed to fetch profile image", {cause: responseBody})
    }

    return responseBody as GetMeRes
}