import type { Meta, StoryFn } from "@storybook/react";
import { Calendar } from "iconoir-react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button", // default label for all stories
    disabled: false,
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  children: "Tertiary",
};

export const PrimaryWithStartIcon = Template.bind({});
PrimaryWithStartIcon.args = {
  variant: "primary",
  children: "Primary",
  startIcon: <Calendar />,
};

export const SecondaryWithStartIcon = Template.bind({});
SecondaryWithStartIcon.args = {
  variant: "secondary",
  children: "Secondary",
  startIcon: <Calendar />,
};

export const TertiaryWithStartIcon = Template.bind({});
TertiaryWithStartIcon.args = {
  variant: "tertiary",
  children: "Tertiary",
  startIcon: <Calendar />,
};

export const PrimaryWithEndIcon = Template.bind({});
PrimaryWithEndIcon.args = {
  variant: "primary",
  children: "Primary",
  endIcon: <Calendar />,
};

export const SecondaryWithEndIcon = Template.bind({});
SecondaryWithEndIcon.args = {
  variant: "secondary",
  children: "Secondary",
  endIcon: <Calendar />,
};

export const TertiaryWithEndIcon = Template.bind({});
TertiaryWithEndIcon.args = {
  variant: "tertiary",
  children: "Tertiary",
  endIcon: <Calendar />,
};