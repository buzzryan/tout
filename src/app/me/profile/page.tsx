"use client";

import { edit } from "@/src/icon/icon";
import { useEffect, useRef, useState } from "react";
import { onFileInput } from "@/src/util/uploadFilePromise";
import Image from "next/image";

export default function ProfilePage() {
  const [me, setMe] = useState<{ username: string } | null>(null);
  const [profileImage, setProfileImage] = useState<string>("");
  const profileImageInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const f = async () => {
      try {
        const m = await fetch("/api/me").then((res) => res.json());
        setMe(m);
        const profileImage = await fetch(`/api/profile/${m.id}/image`).then(
          (res) => res.json(),
        );
        setProfileImage(profileImage.url);
      } catch (e) {
        console.error(e);
      }
    };
    f().then();
  }, []);
  const onClick = () => {
    onFileInput(profileImageInputRef).then((file) => {
      if (file) {
        fetch("/api/me/profile/image", { method: "POST" })
          .then((res) => res.json())
          .then((d) => {
            fetch(d.url, {
              method: "PUT",
              body: file,
              headers: {
                "Content-Type": file.type,
              },
            })
              .then(async (res) => {
                if (res.ok) {
                  console.log("success");
                } else {
                  console.error("err");
                }

                const m = await fetch("/api/me").then((res) => res.json());
                console.log(m);
                setMe(m);
                const profileImage = await fetch(
                  `/api/profile/${m.id}/image`,
                ).then((res) => res.json());
                console.log(profileImage);
                setProfileImage(profileImage.url);
              })
              .catch((e) => {
                console.error(e);
              });
          });
      }
    });
  };

  return (
    <div className="flex-col flex">
      <input
        className="hidden"
        type="file"
        ref={profileImageInputRef}
        accept="image/png, image/jpeg, image/jpg, image/gif, image/svg+xml"
      />
      <div className="avatar justify-center items-center pt-[30px]">
        <div className="rounded-full w-[150px] h-[150px]">
          <Image src={profileImage} alt="profile" height="150" width="150" />
        </div>
      </div>
      <div className="flex flex-col items-center relative h-[14px]">
        <button
          className="px-0 w-[60px] min-h-[10px] max-h-[30px] btn btn-outline font-extrabold flex relative -top-5 left-[60px]"
          onClick={onClick}>
          <div className="flex">
            {edit}
            <span className="align-middle">Edit</span>
          </div>
        </button>
      </div>
      <div>
        <h1 className="text-center font-extrabold text-2xl">{me?.username}</h1>
      </div>
    </div>
  );
}
