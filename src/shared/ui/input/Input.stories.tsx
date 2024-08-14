import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Theme } from "@/entities/theme";
import { StyleDecorator } from "@/shared/lib/storybook";

const meta = {
  title: "shared/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Введите email",
    label: "Email",
  },
  decorators: [StyleDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Введите email",
    label: "Email",
  },
  decorators: [StyleDecorator(Theme.DARK)],
};
