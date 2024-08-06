import { ContactIconItem } from "./ContactIconItem.tsx";
import WhatsappIcon from "../../assets/icons/whatsapp-icon.svg";
import EmailIcon from "../../assets/icons/email-icon.svg";
import ContactBg from "../../assets/images/bg-contact.png";
import { useTranslation } from "react-i18next";

export const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div
      className={`flex justify-center`}
      style={{
        backgroundImage: `url(${ContactBg})`,
        backgroundSize: "cover",
      }}
    >
      <div className={`w-2/3 min-h-96 self-center py-12`}>
        <h2 className={`text-3xl font-semibold pb-8`}>
          {t("app.content.contact")}
        </h2>

        <ContactIconItem
          icon={WhatsappIcon}
          text={"(41) 98889-4999 - Diego "}
          href={"https://web.whatsapp.com/send?phone=5541988894999"}
        />
        <ContactIconItem
          icon={WhatsappIcon}
          text={"(41) 98885-5968 - Vinicius  "}
          href={"https://web.whatsapp.com/send?phone=5541988855968"}
        />
        <ContactIconItem icon={EmailIcon} text={"email@email.com"} />
        <ContactIconItem icon={EmailIcon} text={"email@email.com"} />
      </div>
    </div>
  );
};
