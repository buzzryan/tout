import Login from "@/app/login/loginPage";
import {cookies} from "next/headers";
import {tokenKey} from "@/app/api/login/route";
import {redirect} from "next/navigation";

export default function Page() {
    const token = cookies().get(tokenKey)
    if (token) {
        redirect("/")
    }
    return <Login/>
}