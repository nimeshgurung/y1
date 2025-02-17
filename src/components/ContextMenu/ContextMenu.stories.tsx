import type { Meta, StoryObj } from "@storybook/react";
import { Square3dFromCenter } from "iconoir-react";

import { ContextMenu } from "./ContextMenu";

const meta: Meta<typeof ContextMenu> = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

const mockSections = [
  {
    items: [
      {
        icon: <Square3dFromCenter />,
        label: "View image",
        shortcut: "⌘ + V",
      },
      {
        icon: <Square3dFromCenter />,
        label: "Save image",
        shortcut: "⌘ + S",
      },
    ],
  },
  {
    items: [
      {
        icon: <Square3dFromCenter />,
        label: "Copy image",
        shortcut: "⌘ + C",
      },
      {
        icon: <Square3dFromCenter />,
        label: "Delete image",
        shortcut: "⌘ + D",
      },
    ],
  },
];

const mockTabs = [
  {
    label: "Tab 1",
    sections: [mockSections[0]],
  },
  {
    label: "Tab 2",
    sections: [mockSections[1]],
  },
];

export const Default: Story = {
  args: {
    sections: mockSections,
  },
};

export const SingleSection: Story = {
  args: {
    sections: [mockSections[0]],
  },
};

export const WithTabs: Story = {
  args: {
    tabs: mockTabs,
    defaultTabIndex: 0,
  },
};