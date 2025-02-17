import type { Meta, StoryFn } from "@storybook/react";

import type { TeamNameChipProps } from "./AttributeChip";
import TeamNameChip from "./AttributeChip";

export default {
  title: "Components/AttributeChip",
  component: TeamNameChip,
  argTypes: {
    onClick: { action: "Chip clicked" },
  },
} as Meta<typeof TeamNameChip>;

const Template: StoryFn<TeamNameChipProps> = (args) => (
  <TeamNameChip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "Team Name",
  dotColor: "#9155FD",
  dotChar: "T",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  name: "Custom Color",
  dotColor: "#00FF00",
  dotChar: "C",
};

export const WithoutDotChar = Template.bind({});
WithoutDotChar.args = {
  name: "No Dot",
  dotColor: "#FF00FF",
  dotChar: "",
};