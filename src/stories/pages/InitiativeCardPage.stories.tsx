import { BrowserRouter } from "react-router";
import type { Meta, StoryFn } from "@storybook/react";

import { InitiativeCardPage } from "../../components/Initiative/InitiativeCardPage";

export default {
  title: "Pages/Initiative Cards",
  component: InitiativeCardPage,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default: StoryFn = () => <InitiativeCardPage />;

Default.storyName = "Initiative Cards Page";