import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ChangeLangProps } from "./ChangeLangProps";

export const ChangeLang: FC<ChangeLangProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <button className={className} onClick={toggleLang}>
      <img src="/svg/translate.svg" alt="lang" />
      {t("Язык")}
    </button>
  );
};
