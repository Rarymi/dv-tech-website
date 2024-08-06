import { useTranslation } from "react-i18next";

import brazilFlag from "../../../assets/icons/brazilFlagIcon.svg";
import usaFlag from "../../../assets/icons/usaFlagIcon.svg";

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (lng: string) => {
    return await i18n.changeLanguage(lng);
  };

  return (
    <div className={`flex justify-center items-center px-4`}>
      <div
        className={`pr-2 cursor-pointer`}
        onClick={() => changeLanguage("pt-BR")}
      >
        <img className={`h-8 w-8`} src={brazilFlag} alt={"Bandeira Brasil"} />
      </div>
      <div
        className={` cursor-pointer`}
        onClick={() => changeLanguage("en-US")}
      >
        <img
          src={usaFlag}
          className={`h-8 w-8`}
          alt={"Bandeira United States"}
        />
      </div>
    </div>
  );
};
