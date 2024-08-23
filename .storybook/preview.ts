import type { Preview } from "@storybook/react";
import { RouterDecorator } from "../src/shared/lib/storybook/routerDecorator/RouterDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [RouterDecorator],
};

export default preview;
