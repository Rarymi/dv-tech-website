import { FeedbackItem } from "./FeedbackItem.tsx";
import { useTranslation } from "react-i18next";

export const Feedbacks = () => {
  const { t } = useTranslation();
  return (
    <div className={`w-2/3 flex flex-col self-center pt-20`}>
      <h1 className={`text-4xl text-blue-950`}>
        {t("app.content.feedback.title")}
      </h1>
      <div className={`grid xs:grid-cols-1 gap-1 sm:grid-cols-3  py-6`}>
        <FeedbackItem text={t("app.content.feedback.first")} />
        <FeedbackItem text={t("app.content.feedback.second")} />
        <FeedbackItem text={t("app.content.feedback.third")} />
      </div>
    </div>
  );
};
