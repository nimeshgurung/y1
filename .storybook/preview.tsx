import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/theme/theme"; // Your theme configuration
import CssBaseline from "@mui/material/CssBaseline";
import { IconoirProvider } from "iconoir-react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      {
        name: "Light",
        color: theme.palette.neutral[20],
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <IconoirProvider
        iconProps={{
          color: theme.palette.custom.icon.standard,
          strokeWidth: 1.8,
          width: 16,
          height: 16,
        }}
      >
        <CssBaseline />
        <Story />
      </IconoirProvider>
    </ThemeProvider>
  ),
];

export const tags = ["autodocs"];