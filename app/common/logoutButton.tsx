'use client'


import {POST} from "@/app/constant/common";

export function LogoutButton() {
    const onClick = async () => {
        await fetch("/api/logout", { method: POST})
        window.location.href = "/"
    }
    return <button onClick={onClick} className="btn">Logout</button>
}