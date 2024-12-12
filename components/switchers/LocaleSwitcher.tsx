"use client";

import { startTransition, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useLocale } from "next-intl";
import { LoadingState } from "../ui/loadingState";
import { usePathname, useRouter } from "next-intl/client";


export const LocaleSwitcher = () => {
  const [isLoading, setIsLoading] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(nextLocale: "te" | "en") {
    setIsLoading(true);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button disabled={isLoading} variant={"outline"} size={"icon"}>
          {isLoading ? (
            <LoadingState loadingText="loading...." className="mr-0 " />
          ) : (
            locale.toUpperCase()
          )}
          <span className="sr-only">Change Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            onSelectChange("te");
          }}
          className="cursor-pointer"
        >
          TE
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            onSelectChange("en");
          }}
          className="cursor-pointer"
        >
          EN
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  );
};
