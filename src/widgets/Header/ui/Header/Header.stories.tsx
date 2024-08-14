import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { Theme } from "@/entities/theme";
import { StyleDecorator, RouterDecorator } from "@/shared/lib/storybook";

const meta = {
  title: "widgets/Header",
  component: Header,
  decorators: [RouterDecorator],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [StyleDecorator(Theme.LIGHT)],
};
export const Dark: Story = {
  decorators: [StyleDecorator(Theme.DARK)],
};
