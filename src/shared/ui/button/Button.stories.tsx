import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonTheme } from "./ButtonProps";
import { Theme } from "@/entities/theme";
import { StyleDecorator } from "@/shared/lib/storybook";

const meta = {
  title: "shared/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.PRIMARY,
  },
  decorators: [StyleDecorator(Theme.LIGHT)],
};

export const Clear: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.CLEAR,
  },
  decorators: [StyleDecorator(Theme.LIGHT)],
};

export const Outline: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [StyleDecorator(Theme.LIGHT)],
};

export const Primary_dark: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.PRIMARY,
  },
  decorators: [StyleDecorator(Theme.DARK)],
};

export const Clear_dark: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.CLEAR,
  },
  decorators: [StyleDecorator(Theme.DARK)],
};

export const Outline_dark: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [StyleDecorator(Theme.DARK)],
};
