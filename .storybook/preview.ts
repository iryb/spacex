import type { Preview } from "@storybook/react";
import GlobalStyle from "../src/globalStyles";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: GlobalStyle,
    }),
  ],
};

export default preview;
