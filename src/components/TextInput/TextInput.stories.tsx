import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Input/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

// Default state with placeholder
export const Default: Story = {
  args: {
    placeholder: "Placeholder text",
  },
};

// Focused state
export const Focused: Story = {
  args: {
    placeholder: "Placeholder text",
    autoFocus: true,
  },
};

// Filled state
export const Filled: Story = {
  args: {
    value: "Filled text",
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    placeholder: "Placeholder text",
    disabled: true,
  },
};

// Error state (bonus)
export const Error: Story = {
  args: {
    placeholder: "Placeholder text",
    error: true,
  },
};