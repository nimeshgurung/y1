import { MemoryRouter } from "react-router";
import type { Meta, StoryObj } from "@storybook/react";
import { Search as SearchIcon } from "iconoir-react";

import { PrimaryNavigationItem } from "./PrimaryNavigationItem";

const meta: Meta<typeof PrimaryNavigationItem> = {
  title: "Navigation/PrimaryNavigationItem",
  component: PrimaryNavigationItem,
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof PrimaryNavigationItem>;

export const Inactive: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/other"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    icon: <SearchIcon />,
    label: "Label",
    to: "/search",
  },
};

export const Active: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/search"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    icon: <SearchIcon />,
    label: "Label",
    to: "/search",
  },
};

export const DifferentLabel: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/search"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    icon: <SearchIcon />,
    label: "Dashboard",
    to: "/dashboard",
  },
};