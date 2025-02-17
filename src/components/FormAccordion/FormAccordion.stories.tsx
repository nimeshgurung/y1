import type { Meta, StoryObj } from "@storybook/react";
import { FormAccordion } from "./FormAccordion";
import { TextInput } from "../TextInput/TextInput";

const meta = {
  title: "Components/FormAccordion",
  component: FormAccordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    children: (
      <TextInput placeholder="Placeholder text" />
    ),
  },
};

export const Expanded: Story = {
  args: {
    title: "Title",
    defaultExpanded: true,
    children: (
      <TextInput placeholder="Placeholder text" />
    ),
  },
};

export const WithMultipleInputs: Story = {
  args: {
    title: "Title",
    defaultExpanded: true,
    children: (
      <>
        <TextInput placeholder="First input" />
        <div style={{ marginTop: 12 }}>
          <TextInput placeholder="Second input" />
        </div>
      </>
    ),
  },
};