import { MemoryRouter } from "react-router";
import type { Meta, StoryObj } from "@storybook/react";

import { PrimaryNavigation } from "./PrimaryNavigation";

const meta: Meta<typeof PrimaryNavigation> = {
  title: "Navigation/PrimaryNavigation",
  component: PrimaryNavigation,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PrimaryNavigation>;

export const Default: Story = {
  render: () => <PrimaryNavigation />,
};