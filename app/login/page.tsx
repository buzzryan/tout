import {LoginForm} from "@/app/login/loginForm";

export default function Login() {
    return (
        <div className="w-full h-[100vh] flex flex-col items-center justify-center">
            <div className="pb-[160px] px-[32px] bg-white rounded-lg flex flex-col items-center">
                <h1 className="mt-[36px] mb-[36px] text-3xl font-extrabold">Login</h1>
                <LoginForm/>
                <button type="submit" className="mt-[18px] w-[320px] bg-white btn">LOGIN</button>
            </div>
        </div>
    )
}
