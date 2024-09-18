"use client"

import {usePathname} from "next/navigation";
import {LogoutButton} from "@/src/component/logoutButton";

export function Header({hasToken: hasTokenProp}: Readonly<{ hasToken: boolean }>) {
    const path = usePathname()

    return (
        path === "/login" ? null :
        <header
            className="grid grid-cols-10 sticky h-[64px] top-0 border-solid border-b-[1px] border-slate-900/10 bg-white-100/80">
            <div className="flex justify-center items-center col-start-10 col-end-10">
                {!hasTokenProp ? <a className="btn-ghost font-[family-name:var(--font-geist-mono)] font-medium"
                                   href="/login">Login</a>: <LogoutButton/>}
            </div>
        </header>
    )
}
