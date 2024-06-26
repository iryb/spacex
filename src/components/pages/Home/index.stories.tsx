import type { Meta, StoryObj } from '@storybook/react';

import { Home } from './index';

const meta = {
  component: Home,
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};