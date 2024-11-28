import { boolean } from "zod";
import { ProviderSignInBtn } from "./ProviderSignInBtn";
import { useTranslations } from "next-intl";

export const ProviderSignInBtns = ({
  signInCard,
}: {
  signInCard?: boolean;
}) => {
  const t = useTranslations("AUTH");
  return (
    <div className="flex flex-col gap-2">
      <ProviderSignInBtn className="w-full rounded-[1.9rem] border">
        {signInCard
          ? t("SIGN_IN.PROVIDERS.GOOGLE")
          : t("SIGN_UP.PROVIDERS.GOOGLE")}
      </ProviderSignInBtn>
      <ProviderSignInBtn className="w-full bg-black/90 text-white hover:bg-black/80 rounded-[1.9rem] border">
        {signInCard
          ? t("SIGN_IN.PROVIDERS.APPLE")
          : t("SIGN_UP.PROVIDERS.APPLE")}
      </ProviderSignInBtn>
      <ProviderSignInBtn className="w-full rounded-[1.9rem] border">
        {signInCard
          ? t("SIGN_IN.PROVIDERS.GITHUB")
          : t("SIGN_UP.PROVIDERS.GITHUB")}
      </ProviderSignInBtn>
    </div>
  );
};
