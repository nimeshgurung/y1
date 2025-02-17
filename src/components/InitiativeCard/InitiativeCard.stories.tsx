import type { Meta, StoryObj } from "@storybook/react";

import InitiativeCard from "./InitiativeCard";

const meta: Meta<typeof InitiativeCard> = {
  title: "Components/InitiativeCard",
  component: InitiativeCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof InitiativeCard>;

export const Default: Story = {
  args: {
    name: "Initiative Name",
    teamName: "TEAM NAME",
    teamInitial: "T",
    date: "DD MMM YY",
    status: "inProgress",
    progress: 75,
    commentCount: 1,
    isBookmarked: false,
    onCommentClick: () => console.log("Comment clicked"),
    onRefresh: () => console.log("Refresh clicked"),
    onBookmarkClick: () => console.log("Bookmark clicked"),
  },
};

export const Bookmarked: Story = {
  args: {
    ...Default.args,
    isBookmarked: true,
  },
};