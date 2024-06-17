import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from "./index";

const meta = {
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    type: "horizontal",
    links: [
      { href: "/", title: "Home" },
      { href: "/about", title: "About" },
      { href: "/contact", title: "Contact" },
    ],
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

export const Vertical: Story = {
  args: {
    type: "vertical",
    links: [
      { href: "/", title: "Home" },
      { href: "/about", title: "About" },
      { href: "/contact", title: "Contact" },
    ],
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
