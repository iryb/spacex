import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './index';

const meta = {
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};