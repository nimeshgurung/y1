import { Meta, StoryObj } from "@storybook/react";
import { ToggleGroupInput } from "./ToggleGroupInput";

const meta: Meta<typeof ToggleGroupInput> = {
  title: "Input/ToggleGroupInput",
  component: ToggleGroupInput,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroupInput>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Option 1",
        description: "Description for option 1",
        value: "1",
      },
      {
        title: "Option 2",
        description: "Description for option 2",
        value: "2",
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    items: [
      {
        title: "Option 1",
        description: "Description for option 1",
        value: "1",
      },
      {
        title: "Option 2",
        description: "Description for option 2",
        value: "2",
      },
    ],
    disabled: true,
  },
};

export const WithLongText: Story = {
  args: {
    items: [
      {
        title: "Very Long Option Title 1",
        description: "This is a very long description that might wrap",
        value: "1",
      },
      {
        title: "Very Long Option Title 2",
        description: "This is a very long description that might wrap",
        value: "2",
      },
      {
        title: "Very Long Option Title 3",
        description: "This is a very long description that might wrap",
        value: "3",
      },
    ],
  },
};

export const TwoOptionsTitleOnly: Story = {
  args: {
    items: [
      {
        title: "Yes",
        description: "",
        value: "yes",
      },
      {
        title: "No",
        description: "",
        value: "no",
      },
    ],
  },
};

export const ThreeOptionsTitleOnly: Story = {
  args: {
    items: [
      {
        title: "Low",
        description: "",
        value: "low",
      },
      {
        title: "Medium",
        description: "",
        value: "medium",
      },
      {
        title: "High",
        description: "",
        value: "high",
      },
    ],
  },
};

export const TwoOptionsTitleOnlyWithDefaultSelected: Story = {
  args: {
    items: [
      {
        title: "Active",
        description: "",
        value: "active",
      },
      {
        title: "Inactive",
        description: "",
        value: "inactive",
      },
    ],
    defaultValue: "inactive",
  },
};