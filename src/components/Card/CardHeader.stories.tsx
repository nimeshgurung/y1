import type { Meta, StoryFn } from "@storybook/react";

import type { CardHeaderProps } from "./CardHeader";
import CardHeader from "./CardHeader";

export default {
  title: "Components/CardHeader",
  component: CardHeader,
} as Meta;

const Template: StoryFn<CardHeaderProps> = (
  args: CardHeaderProps
) => {
  return <CardHeader {...args} />;
};

export const Objective = Template.bind({});
Objective.args = {
  type: "Objective",
};

export const KeyResult = Template.bind({});
KeyResult.args = {
  type: "Key Result",
};

export const Initiative = Template.bind({});
Initiative.args = {
  type: "Initiative",
};

export const Work = Template.bind({});
Work.args = {
  type: "Work",
};

export const Assignment = Template.bind({});
Assignment.args = {
  type: "Assignment",
};

export const Other = Template.bind({});
Other.args = {
  type: "Other",
};