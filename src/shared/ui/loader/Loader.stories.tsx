import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
import { Theme } from "@/entities/theme";
import { StyleDecorator } from "@/shared/lib/storybook";

const meta = {
  title: "shared/Loader",
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [StyleDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  decorators: [StyleDecorator(Theme.DARK)],
};
