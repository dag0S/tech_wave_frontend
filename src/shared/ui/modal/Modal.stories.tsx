import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Theme } from "@/entities/theme";
import { StyleDecorator } from "@/shared/lib/storybook";

const meta = {
  title: "shared/Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: "Text",
    isOpen: true,
  },
  decorators: [StyleDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {
    children: "Text",
    isOpen: true,
  },
  decorators: [StyleDecorator(Theme.DARK)],
};
