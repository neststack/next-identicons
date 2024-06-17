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
      <div className="flex flex-col gap-1 items-center justify-center">
        <Button onClick={() => signIn("google")}>Sign in Google</Button>
        <Button variant="destructive" onClick={() => signIn("google")}>
          Sign in Google
        </Button>
        <Button variant="outline" onClick={() => signIn("google")}>
          Sign in Google
        </Button>
        <Button variant="secondary" onClick={() => signIn("google")}>
          Sign in Google
        </Button>
        <Button variant="ghost" onClick={() => signIn("google")}>
          Sign in Google
        </Button>
        <Button variant="link" onClick={() => signIn("google")}>
          Sign in Google
        </Button>
      </div>
    </>
  );
};

export default Login;
