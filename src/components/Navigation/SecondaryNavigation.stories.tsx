import { MemoryRouter } from "react-router";
import type { Meta, StoryFn } from "@storybook/react";

import SecondaryNavigation from "./SecondaryNavigation";

export default {
  title: "Navigation/SecondaryNavigation",
  component: SecondaryNavigation,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ width: 240 }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} as Meta<typeof SecondaryNavigation>;

const Template: StoryFn<typeof SecondaryNavigation> = (args) => (
  <SecondaryNavigation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  sections: [
    {
      items: [
        { label: "Overview", to: "/overview" },
        { label: "Book of work", to: "/book-of-work" },
        { label: "Initiative OKRs", to: "/okrs" },
      ],
    },
    {
      title: "Reporting",
      items: [
        { label: "Key dates", to: "/key-dates" },
        { label: "Commentary", to: "/commentary" },
        { label: "Risks & issues", to: "/risks" },
        { label: "Dependencies", to: "/dependencies" },
      ],
    },
    {
      title: "Advanced",
      items: [
        { label: "Budgets and costs", to: "/budgets" },
        { label: "Planning canvas", to: "/planning" },
        { label: "Plan status", to: "/status" },
        { label: "Sunburst", to: "/sunburst" },
      ],
    },
  ],
};

export const SingleSection = Template.bind({});
SingleSection.args = {
  sections: [
    {
      items: [
        { label: "Overview", to: "/overview" },
        { label: "Book of work", to: "/book-of-work" },
        { label: "Initiative OKRs", to: "/okrs" },
      ],
    },
  ],
};

export const WithoutTitles = Template.bind({});
WithoutTitles.args = {
  sections: [
    {
      items: [
        { label: "Overview", to: "/overview" },
        { label: "Book of work", to: "/book-of-work" },
      ],
    },
    {
      items: [
        { label: "Key dates", to: "/key-dates" },
        { label: "Commentary", to: "/commentary" },
      ],
    },
  ],
};