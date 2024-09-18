'use client'

import {POST} from "@/src/app/constant/common";

export function LogoutButton() {
    const onClick = async () => {
        await fetch("/api/logout", { method: POST})
        window.location.href = "/"
    }
    return <button onClick={onClick} className="btn-ghost font-[family-name:var(--font-geist-mono)] font-medium">Logout</button>
}