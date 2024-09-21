import Image from "next/image";
import { LogoutButton } from "@/src/component/logoutButton";

export default function Home() {
  return (
    <div className="grow grid justify-center">
      <main className="flex flex-col gap-8 row-start-3 items-center sm:items-start">
        <h1 className="text-4xl font-extrabold">Hello. It&apos;s me</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Now we implement{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              Login & Logout
            </code>
            .
          </li>
          <li>We have API that signup and upload profile image.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a className="btn" href="/login">
            Login
          </a>
          <LogoutButton />
        </div>
      </main>
      <footer className="row-start-4 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noreferrer">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.notion.so/browon/a3600d03edb24cd2a3b1a4818d1924a3"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to my tech notes →
        </a>
      </footer>
    </div>
  );
}
