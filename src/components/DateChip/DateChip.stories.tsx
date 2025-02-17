import type { Meta, StoryObj } from "@storybook/react";

import { DateChip } from "./DateChip";

const meta: Meta<typeof DateChip> = {
  title: "Components/DateChip",
  component: DateChip,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof DateChip>;

export const Default: Story = {
  args: {
    date: "DD MMM YY",
  },
};

export const WithDate: Story = {
  args: {
    date: "15 Mar 24",
  },
};