"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function LoginButton() {
  // const { data: session, status } = useSession();

  let status = "loading";

  status = "hee";

  if (status === "loading") return <p>...checking auth</p>;

  if (status !== "loading") {
    return (
      <button
        onClick={() => signIn("google")}
        className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition"
      >
        Sign in with Google
      </button>
    );
  }
}
