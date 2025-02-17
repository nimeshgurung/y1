import type { Meta, StoryObj } from "@storybook/react";

import { WorkItemSelectionCard } from "../WorkItemSelectionCard/WorkItemSelectionCard";

import { WorkItemSelectionList } from "./WorkItemSelectionList";

const meta: Meta<typeof WorkItemSelectionList> = {
  title: "components/WorkItemSelectionList",
  component: WorkItemSelectionList,
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof WorkItemSelectionList>;

export const Multiple: Story = {
  render: () => (
    <WorkItemSelectionList>
      {[1, 2, 3].map((_, i) => (
        <WorkItemSelectionCard
          key={i}
          team={{ id: "id1", name: "Blueprint", type: "crew" }}
          label={"Issue name"}
          date={"DD MMM YYYY"}
          checkboxProps={{ checked: Math.random() < 0.5 }}
        />
      ))}
    </WorkItemSelectionList>
  ),
};

export const Single: Story = {
  render: () => (
    <WorkItemSelectionList>
      <WorkItemSelectionCard
        team={{ id: "id1", name: "Blueprint", type: "crew" }}
        label={"Issue name"}
        date={"DD MMM YYYY"}
        checkboxProps={{ checked: Math.random() < 0.5 }}
      />
    </WorkItemSelectionList>
  ),
};

export const Checked: Story = {
  render: () => (
    <WorkItemSelectionList>
      {[1, 2, 3].map((_, i) => (
        <WorkItemSelectionCard
          key={i}
          team={{ id: "id1", name: "Blueprint", type: "crew" }}
          label={"Issue name"}
          date={"DD MMM YYYY"}
          checkboxProps={{ checked: true }}
        />
      ))}
    </WorkItemSelectionList>
  ),
};