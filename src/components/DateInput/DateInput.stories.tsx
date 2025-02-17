import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DateInput } from "./DateInput";

const meta = {
  title: "Input/DateInput",
  component: DateInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof DateInput>;

// Default state with placeholder
export const Default: Story = {
  args: {},
};

// Filled state with a date
export const Filled: Story = {
  args: {
    value: new Date("2025-03-25"),
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    value: new Date("2025-03-25"),
  },
};

// Custom placeholder
export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Select a date",
  },
};

// With min and max date constraints
export const DateConstraints: Story = {
  args: {
    minDate: new Date("2024-01-01"),
    maxDate: new Date("2024-12-31"),
    value: new Date("2024-06-15"),
  },
};

// With time input
export const WithTimeInput: Story = {
  args: {
    showTimeInput: true,
    value: new Date("2024-03-25T14:30:00"),
  },
};

// Interactive example with all features
const InteractiveDateInput = () => {
  const [date, setDate] = useState<Date | null>(null);

  const handleChange = (name: string | undefined, date: Date | null) => {
    console.log(`Date changed for ${name}:`, date);
    setDate(date);
  };

  return (
    <DateInput
      value={date}
      onChange={handleChange}
      name="interactive-date"
      label="Interactive Date"
      placeholder="Pick a date"
      minDate={new Date()}
      maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
      showTimeInput
    />
  );
};

export const Interactive: Story = {
  render: () => <InteractiveDateInput />,
};