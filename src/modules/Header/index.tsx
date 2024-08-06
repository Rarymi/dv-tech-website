import LogoSm from "../../assets/logo-sm-v1.png";
import { useTranslation } from "react-i18next";
import { HeaderItem } from "./components/HeaderItem.tsx";
import { ChangeLanguage } from "./components/ChangeLanguage.tsx";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div
      className={`hidden sm:grid fixed  grid-cols-5 columns-xs   gap-4  bg-white/70 shadow-lg  w-full self-center items-center justify-center  px-60`}
    >
      <img src={LogoSm} alt={"Logo"} className={"w-16"} />

      <HeaderItem link={"home"} title={t("app.title.home")} />
      <HeaderItem link={"aboutUs"} title={t("app.title.about")} />
      <HeaderItem link={"contact"} title={t("app.title.contacts")} />

      <ChangeLanguage />
    </div>
  );
};
