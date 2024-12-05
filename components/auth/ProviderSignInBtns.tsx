import { boolean } from "zod";
import { ProviderSignInBtn } from "./ProviderSignInBtn";
import { useTranslations } from "next-intl";
import { GoogleLogo } from "../svg/GoogleLogo";
import { AppleLogo } from "../svg/AppleLogo";
import { GithubLogo } from "../svg/GithubLogo";

export const ProviderSignInBtns = ({
  signInCard,
  disabled,
}: {
  signInCard?: boolean;
  disabled?: boolean;
}) => {
  const t = useTranslations("AUTH");
  return (
    <div className="flex flex-col gap-2">
      <ProviderSignInBtn
        disabled={disabled}
        className="w-full rounded-[1.9rem] border text-sm h-12 sm:h-10 sm:text-base"
      >
        <GoogleLogo className="mr-2" width={20} height={20} />
        {signInCard
          ? t("SIGN_IN.PROVIDERS.GOOGLE")
          : t("SIGN_UP.PROVIDERS.GOOGLE")}
      </ProviderSignInBtn>

      {/* <ProviderSignInBtn className="w-full bg-black/90 text-white hover:bg-black/80 rounded-[1.9rem] border">
        <AppleLogo className="mr-2 width={20} height={20} " />
        {signInCard
          ? t("SIGN_IN.PROVIDERS.APPLE")
          : t("SIGN_UP.PROVIDERS.APPLE")}
      </ProviderSignInBtn> */}

      <ProviderSignInBtn
        disabled={disabled}
        className="w-full rounded-[1.9rem] border text-sm h-12 sm:h-10 sm:text-base"
      >
        <GithubLogo className="fill-foreground mr-2" width={20} height={20}  />
        {signInCard
          ? t("SIGN_IN.PROVIDERS.GITHUB")
          : t("SIGN_UP.PROVIDERS.GITHUB")}
      </ProviderSignInBtn>
    </div>
  );
};
