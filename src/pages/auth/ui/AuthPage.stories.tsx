import type { Meta, StoryObj } from "@storybook/react";
import AuthPage from "./AuthPage";
import { Theme } from "@/entities/theme";
import { StyleDecorator } from "@/shared/lib/storybook";
import { StoreDecorator } from "@/shared/lib/storybook";

const meta = {
  title: "pages/AuthPage",
  component: AuthPage,
} satisfies Meta<typeof AuthPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [StyleDecorator(Theme.LIGHT), StoreDecorator({})],
};
export const Dark: Story = {
  decorators: [StyleDecorator(Theme.DARK), StoreDecorator({})],
};
