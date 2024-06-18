import type { Meta, StoryObj } from "@storybook/react";

import { Banner } from "./index";

const meta = {
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Plan your space trip",
    image: "http://localhost:8080/assets/banner.jpg",
  },
};

export const Small: Story = {
  args: {
    title: "Plan your space trip",
    image: "http://localhost:8080/assets/banner.jpg",
    height: "small",
  },
};
