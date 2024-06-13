"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Login = () => {
  const { data: session } = useSession();
  if (session) {
    console.log({ session });
    return (
      <>
        Signed in as {session?.user?.name} <br />
        <Image
          src={session?.user?.image || "/fallback.png"}
          alt="avatar"
          width={50}
          height={50}
        />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn("google")}>Sign in Google</Button>
    </>
  );
};

export default Login;
