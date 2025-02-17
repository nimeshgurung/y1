import type { Meta, StoryObj } from "@storybook/react";

import ProgressBar from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["default", "crew", "objective", "pod"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["striped", "normal"],
      },
    },
  },
};

export default meta;

export const CrewStyle: StoryObj<typeof ProgressBar> = {
  args: {
    progress: 50,
    type: "crew",
    variant: "striped",
  },
};

export const ObjectiveStyle: StoryObj<typeof ProgressBar> = {
  args: {
    progress: 50,
    type: "objective",
    variant: "striped",
  },
};

export const PodStyle: StoryObj<typeof ProgressBar> = {
  args: {
    progress: 50,
    type: "pod",
    variant: "striped",
  },
};