import { FC } from "react";
import { IChangeTheme } from "./ChangeThemeProps";
import { Theme, useTheme } from "@/entities/theme";

export const ChangeTheme: FC<IChangeTheme> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === Theme.LIGHT ? "/svg/light.svg" : "/svg/dark.svg";

  return (
    <button className={className} onClick={toggleTheme}>
      <img src={icon} alt="theme" />
      Тема
    </button>
  );
};
