import type { Meta, StoryObj } from "@storybook/react";
import { Search as SearchIcon } from "iconoir-react";

import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Inactive: Story = {
  decorators: [(Story) => <Story />],
  args: {
    icon: <SearchIcon />,
    isActive: false,
  },
};

export const Active: Story = {
  decorators: [(Story) => <Story />],
  args: {
    icon: <SearchIcon />,
    isActive: true,
  },
};