import { MemoryRouter } from "react-router";
import type { Meta, StoryObj } from "@storybook/react";

import SecondaryNavigationItem from "./SecondaryNavigationItem";

const meta: Meta<typeof SecondaryNavigationItem> = {
  title: "Navigation/SecondaryNavigationItem",
  component: SecondaryNavigationItem,
  // Wrap stories in a MemoryRouter so NavLink can work properly.
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SecondaryNavigationItem>;

export const Active: Story = {
  args: {
    label: "Overview",
    to: "/",
  },
};

export const Inactive: Story = {
  args: {
    label: "Profile",
    to: "/profile",
  },
};