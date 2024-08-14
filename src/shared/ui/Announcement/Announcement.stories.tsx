import type { Meta, StoryObj } from "@storybook/react";
import { Announcement } from "./Announcement";
import { StyleDecorator } from "@/shared/lib/storybook";
import { Theme } from "@/entities/theme";

const meta = {
  title: "shared/Announcement",
  component: Announcement,
} satisfies Meta<typeof Announcement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: "Text",
  },
  decorators: [StyleDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {
    children: "Text",
  },
  decorators: [StyleDecorator(Theme.DARK)],
};
