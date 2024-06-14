import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./index";

const meta = {
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    isActive: false,
    children: "Link",
  },
  decorators: [
    (story) => (
      <div
        style={{ padding: "15px", backgroundColor: "var(--background-color)" }}
      >
        {story()}
      </div>
    ),
  ],
};

export const Active: Story = {
  args: {
    href: "#",
    isActive: true,
    children: "Link",
  },
  decorators: [
    (story) => (
      <div
        style={{ padding: "15px", backgroundColor: "var(--background-color)" }}
      >
        {story()}
      </div>
    ),
  ],
};
