import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    type: "button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    type: "button",
    variant: "secondary",
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
