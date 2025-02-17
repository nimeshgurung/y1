import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { List, MenuScale, ViewGrid } from "iconoir-react";

import { ControlGroup } from "./ControlGroup";

const meta: Meta<typeof ControlGroup> = {
  title: "components/ControlGroup",
  component: ControlGroup,
  args: {
    options: [
      { label: "Grid", icon: <ViewGrid /> },
      { label: "List", icon: <List /> },
      { label: "Gantt", icon: <MenuScale /> },
    ],
    activeOption: "Grid",
  },
};

export default meta;

type Story = StoryObj<typeof ControlGroup>;

export const Default: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [_, setArgs] = useArgs();

    const onChange = (option: string) => {
      args.onChange(option);
      setArgs({ activeOption: option });
    };
    return <ControlGroup {...args} onChange={onChange} />;
  },
};