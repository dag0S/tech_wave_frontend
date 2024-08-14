import { Theme, ThemeProvider } from "@/entities/theme";
import { Decorator } from "@storybook/react";

import "../../../scss/main.scss";

export const StyleDecorator =
  (theme: Theme): Decorator =>
  (Story) => {
    return (
      <ThemeProvider initialTheme={theme}>
        <Story />
      </ThemeProvider>
    );
  };
