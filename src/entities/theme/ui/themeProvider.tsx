import { FC, useEffect, useMemo, useState } from "react";
import { IThemeProvider } from "./ThemeProviderProps";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "../config/themeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<IThemeProvider> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  useEffect(() => {
    if (theme === Theme.LIGHT) {
      document.body?.classList.add(Theme.LIGHT);
      document.body?.classList.remove(Theme.DARK);
    } else {
      document.body?.classList.add(Theme.DARK);
      document.body?.classList.remove(Theme.LIGHT);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
