import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Initiative: Story = {
  args: {
    type: "Objective",
    name: "Name",
    teamName: "MANAGER",
    date: "DD MMM YY",
    onAddClick: () => {},
  },
};

export const Work: Story = {
  args: {
    type: "Key Result",
    name: "Name",
    teamName: "MANAGER",
    date: "DD MMM YY",
    onAddClick: () => {},
  },
};