import { ServicesIconItem } from "./ServicesIconItem.tsx";
import ToolIcon from "../../../assets/icons/tool-icon.svg";
import BoltIcon from "../../../assets/icons/bolt-icon.svg";
import { ServiceItem } from "./ServiceItem.tsx";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`flex flex-col sm:flex-row  gap-2 `}>
        <ServicesIconItem
          text={t("app.content.about.services-1")}
          color={`bg-amber-500`}
          icon={ToolIcon}
        />
        <ServicesIconItem
          text={t("app.content.about.services-2")}
          color={`bg-blue-900`}
          icon={BoltIcon}
        />
      </div>
      <div className={`py-6`}>
        <ServiceItem text={t("app.content.about.services-3")} />
        <ServiceItem text={t("app.content.about.services-4")} />
        <ServiceItem text={t("app.content.about.services-5")} />
      </div>
    </>
  );
};
