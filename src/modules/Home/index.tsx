import BannerHome from "../../assets/images/banner-home.svg";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Element name={"home"}>
      <div
        className={`flex flex-col h-full w-full bg-no-repeat border-b-4 border-b-blue-950 justify-center `}
        style={{
          height: "100vh",
          backgroundImage: `url(${BannerHome})`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-3/5 self-center font-semibold text-wrap">
          <h1>{t("app.content.home-1")}</h1>
          <div className={`sm:flex gap-3`}>
            <h1 className={`text-yellow-600`}>{t("app.content.home-2")}</h1>
            <h1>{t("app.content.home-3")}</h1>
          </div>
          <p className={`text-gray-100 text-lg py-4`}>
            {t("app.content.home-4")}
          </p>
        </div>
      </div>
    </Element>
  );
};
