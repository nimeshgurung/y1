import type { Meta, StoryObj } from "@storybook/react";

import { StatusChip } from "./StatusChip";

const meta: Meta<typeof StatusChip> = {
  title: "Components/StatusChip",
  component: StatusChip,
};

export default meta;

type Story = StoryObj<typeof StatusChip>;

export const Planned: Story = {
  args: {
    status: "planned",
  },
};

export const InProgress: Story = {
  args: {
    status: "inProgress",
  },
};

export const Done: Story = {
  args: {
    status: "done",
  },
};