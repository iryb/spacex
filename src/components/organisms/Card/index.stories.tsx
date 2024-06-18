import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./index";

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: "http://localhost:8080/assets/banner.jpg",
    title: "Extraordinary tour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non commodo lorem.",
  },
};
