import type { Meta, StoryFn } from "@storybook/react";

import { RAGStatusChip } from "./RAGStatusChip";

export default {
  title: "Components/RAGStatusChip",
  component: RAGStatusChip,
  args: {
    label: "Status Label", // default label for all stories
  },
} as Meta<typeof RAGStatusChip>;

const Template: StoryFn<typeof RAGStatusChip> = (args) => (
  <RAGStatusChip {...args} />
);

export const Green = Template.bind({});
Green.args = {
  status: "green",
  label: "Project on schedule",
};

export const Amber = Template.bind({});
Amber.args = {
  status: "amber",
  label: "Minor delays",
};

export const Red = Template.bind({});
Red.args = {
  status: "red",
  label: "Critical blocker",
};

// Example with custom labels
export const CustomLabels = Template.bind({});
CustomLabels.args = {
  status: "green",
  label: "All good",
};