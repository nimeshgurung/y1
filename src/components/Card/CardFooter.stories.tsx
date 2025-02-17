import type { Meta, StoryFn } from "@storybook/react";

import CardProgress from "./CardProgress";

export default {
  title: "Components/CardProgress",
  component: CardProgress,
} as Meta;

const Template: StoryFn<typeof CardProgress> = (args) => (
  <CardProgress {...args} />
);

export const Default = Template.bind({});
Default.args = {
  status: "inProgress",
  ragStatus: "green",
  ragLabel: "On track",
  date: "Just now",
  progress: 75,
  progressType: "objective",
  progressVariant: "normal",
};