import AboutBg from "../../assets/images/bg-about.svg";
import ImgAbout from "../../assets/images/img-about.png";
import DvTech from "../../assets/images/DVTech.svg";
import { useTranslation } from "react-i18next";
import { Services } from "./components/Services.tsx";
import { Element } from "react-scroll";

export const About = () => {
  const { t } = useTranslation();

  return (
    <Element name={"aboutUs"}>
      <div
        className={`grid xs:grid-cols-1 sm:grid-cols-2 bg-no-repeat p-16 gap-6 justify-center border-b-4 border-b-blue-950 `}
        style={{
          backgroundImage: `url(${AboutBg})`,
          backgroundSize: "cover",
        }}
      >
        <img src={ImgAbout} alt={""} className={`hidden  sm:grid w-3/4`} />
        <div className={`w-4/6 `}>
          <div className={`py-9`}>
            <span className={`uppercase font-medium  text-amber-500`}>
              {t("app.title.about")}
            </span>
            <h2 className={`text-3xl font-bold`}>
              {t("app.content.about.title-1")}
            </h2>
            <h2 className={`text-3xl font-bold`}>
              {t("app.content.about.title-2")}
            </h2>

            <p className={`text-gray-500 font-light py-4`}>
              {t("app.content.about.description")}
            </p>
            <Services />
            <img src={DvTech} alt={""} className={`w-1/4`} />
          </div>
        </div>
      </div>
    </Element>
  );
};
