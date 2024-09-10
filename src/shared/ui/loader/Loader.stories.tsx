import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
import { Theme } from "@/entities/theme";
import { StyleDecorator } from "@/shared/lib/storybook";
import { LoaderSize } from "./LoaderProps";

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

export const Loader_Size_S: Story = {
  args: {
    size: LoaderSize.S
  },
  decorators: [StyleDecorator(Theme.LIGHT)],
};

export const Loader_Size_M: Story = {
  args: {
    size: LoaderSize.M
  },
  decorators: [StyleDecorator(Theme.LIGHT)],
};

export const Loader_Size_L: Story = {
  args: {
    size: LoaderSize.L
  },
  decorators: [StyleDecorator(Theme.LIGHT)],
};
