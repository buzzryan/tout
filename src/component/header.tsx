"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

export function Header({
  hasToken: hasTokenProp,
  profileImage: profileImageProp,
}: Readonly<{
  hasToken: boolean;
  profileImage: string;
}>) {
  const path = usePathname();

  return path === "/login" ? null : (
    <header className="grid grid-cols-3 sticky h-[64px] top-0 border-solid border-b-[1px] border-slate-900/10 bg-white-100/80">
      <div className="flex justify-end items-center col-start-3 col-end-3 pr-[2vw]">
        {hasTokenProp ? (
          <a className="avatar" href="/me/profile">
            <div className="rounded-full w-[30px] h-[30px]">
              <Image
                src={profileImageProp}
                alt="profile"
                height="30"
                width="30"
              />
            </div>
          </a>
        ) : (
          <a
            className="btn-ghost font-[family-name:var(--font-geist-mono)] font-medium"
            href="/login">
            Login
          </a>
        )}
      </div>
    </header>
  );
}
