import { ReactNode } from "react";
import { Theme } from "../config/themeContext";

export interface IThemeProvider {
  children: ReactNode;
  initialTheme?: Theme;
}
