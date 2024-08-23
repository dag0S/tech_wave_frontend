import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { IChangeTheme } from "./ChangeThemeProps";
import { Theme, useTheme } from "@/entities/theme";

export const ChangeTheme: FC<IChangeTheme> = memo(({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const icon = theme === Theme.LIGHT ? "/svg/light.svg" : "/svg/dark.svg";

  return (
    <button className={className} onClick={toggleTheme}>
      <img src={icon} alt="theme" />
      {t("Тема")}
    </button>
  );
});
