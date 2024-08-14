import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Theme } from "@/entities/theme";
import { StyleDecorator } from "@/shared/lib/storybook";

const meta = {
  title: "shared/Card",
  component: Card,
} satisfies Meta<typeof Card>;

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
