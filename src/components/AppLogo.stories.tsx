import type { Meta, StoryObj } from "@storybook/react";

import { AppLogo } from "./AppLogo";

const meta = {
  title: "Components/AppLogo",
  component: () => {
    return <AppLogo />;
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AppLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "",
  },
};

export const Large: Story = {
  args: {
    className: "w-32 h-32",
  },
};