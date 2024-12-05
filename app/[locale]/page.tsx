"use client";

import { ThemeSwitcher } from "@/components/switchers/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("Index");
  const session = useSession();

  const LogoutHandler = () => {
    signOut({
      callbackUrl: `${window.location.origin}/sign-in`,
    });
  }

  return (
    <>
    <Button onClick={LogoutHandler}>Logout</Button>
    <ThemeSwitcher />
    </>
  )
};

export default Home;
