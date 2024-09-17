"use client"

import {FormEvent} from "react";
import {POST} from "@/app/constant/common";
import {LoginForm} from "@/app/login/loginForm";

export default function Login() {
    const submitLogin = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const response = await fetch("/api/login", {
            method: POST,
            body: new FormData(event.currentTarget)
        })
        if (response.ok) {
            window.location.href = "/"
        } else {

        }
    }

    return (
        <div className="w-full h-[100vh] flex flex-col items-center justify-center">
            <form className="pb-[160px] px-[32px] bg-white rounded-lg flex flex-col items-center" onSubmit={submitLogin}
                  method="post">
                <h1 className="mt-[36px] mb-[36px] text-3xl font-extrabold">Login</h1>
                <LoginForm/>
                <button type="submit" className="mt-[18px] w-[320px] bg-white btn">LOGIN</button>
            </form>
        </div>
    )
}
