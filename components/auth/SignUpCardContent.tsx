"use client";

import { useForm } from "react-hook-form";
import { CardContent } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { signUpSchema, SignUpSchema } from "@/schema/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProviderSignInBtns } from "./ProviderSignInBtns";
import { Input } from "../ui/input";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export const SignUpCardContent = () => {
  const t = useTranslations("AUTH");
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false)
  const {toast} = useToast();
  const router = useRouter();

  const onSubmit = async (data: SignUpSchema) => {
    setIsLoading(true);

    try {
        const res = await fetch('/api/auth/regster',{
            method: "POST",
            body:JSON.stringify(data),
           headers: {
            "Content-Type": "application/json"
           }
        })

        if(!res.ok){
            throw new Error("Something went wrong");
        }

        const signUpInfo = await res.json();

        if(res.status === 200){
            toast({
                title:
            })
        }
    } catch (error) {
        
    }
  };

  return (
    <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <ProviderSignInBtns />
          <div className="space-y-1.5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t("EMAIL")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t("USERNAME")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t("PASSWORD")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <Button className="w-full font-bold text-white" type="submit">
              {t("SIGN_UP.SUBMIT_BTN")}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
                {t("SIGN_UP.TERMS.FIRST")} {" "}
                <Link className="font-bold" href={"/"}>
                {t("SIGN_UP.TERMS.SECOND")}{" "}
                </Link>
            </p>
          </div>
        </form>
      </Form>
    </CardContent>
  );
};
