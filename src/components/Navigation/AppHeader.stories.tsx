import type { Meta, StoryFn } from "@storybook/react";

import AppHeader from "./AppHeader";

export default {
  title: "Navigation/AppHeader",
  component: AppHeader,
} as Meta;

const Template: StoryFn = (args: any) => <AppHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};