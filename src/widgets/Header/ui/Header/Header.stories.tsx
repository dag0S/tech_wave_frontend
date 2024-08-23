import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { Theme } from "@/entities/theme";
import { StyleDecorator } from "@/shared/lib/storybook";
import { StoreDecorator } from "@/shared/lib/storybook";

const meta = {
  title: "widgets/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    StyleDecorator(Theme.LIGHT),
    StoreDecorator({ userSlice: { isAuthenticated: false } }),
  ],
};

export const Dark: Story = {
  decorators: [
    StyleDecorator(Theme.DARK),
    StoreDecorator({ userSlice: { isAuthenticated: false } }),
  ],
};

export const Authorization: Story = {
  decorators: [
    StyleDecorator(Theme.LIGHT),
    StoreDecorator({ userSlice: { isAuthenticated: true } }),
  ],
};
