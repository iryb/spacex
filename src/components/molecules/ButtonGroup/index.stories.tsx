import type { Meta, StoryObj } from "@storybook/react";

import { ButtonGroup } from "./index";
import Button from "../../atoms/Button";
import IconButton from "../../atoms/IconButton";

const meta = {
  component: ButtonGroup,
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Button variant="primary">Button 1</Button>,
      <IconButton variant="primary" icon="favorite" />,
    ],
  },
};
