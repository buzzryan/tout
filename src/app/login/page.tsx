import Login from "@/src/app/login/loginPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { TOKEN_KEY } from "@/src/app/constant/common";

export default function Page() {
  const token = cookies().get(TOKEN_KEY);
  if (token) {
    redirect("/");
  }
  return <Login />;
}
