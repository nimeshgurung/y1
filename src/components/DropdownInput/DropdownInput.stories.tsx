import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DropdownInput } from "./DropdownInput";

const meta = {
  title: "Input/DropdownInput",
  component: DropdownInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4" },
  { label: "Option 5", value: "5" },
];

export const Default: Story = {
  args: {
    placeholder: "Select...",
    options,
    onChange: (value) => console.log("Selected value:", value),
  },
};

export const WithValue: Story = {
  args: {
    value: "3",
    options,
    onChange: (value) => console.log("Selected value:", value),
  },
};

export const Disabled: Story = {
  args: {
    value: "1",
    options,
    disabled: true,
    onChange: (value) => console.log("Selected value:", value),
  },
};

export const CustomWidth: Story = {
  args: {
    width: 400,
    options,
    onChange: (value) => console.log("Selected value:", value),
  },
};

const InteractiveDropdownExample = () => {
  const [value, setValue] = useState<string>();

  return (
    <DropdownInput
      value={value}
      options={options}
      onChange={setValue}
      placeholder="Select an option..."
    />
  );
};

export const Interactive: Story = {
  render: () => <InteractiveDropdownExample />,
  args: {
    options,
    onChange: () => {}, // Required by type but not used since we're using render
  },
};