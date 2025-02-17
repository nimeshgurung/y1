import type { Meta, StoryObj } from "@storybook/react";

import { WorkItemSelectionCard } from "./WorkItemSelectionCard";

const meta: Meta<typeof WorkItemSelectionCard> = {
  title: "components/WorkItemSelectionCard",
  component: WorkItemSelectionCard,
  decorators: [(Story) => <Story />],
  args: {
    team: { id: "id1", name: "Blueprint", type: "crew" },
    label: "Issue name",
    date: "DD MMM YYYY",
  },
};

export default meta;

type Story = StoryObj<typeof WorkItemSelectionCard>;

export const Default: Story = {
  render: (args) => <WorkItemSelectionCard {...args} />,
};