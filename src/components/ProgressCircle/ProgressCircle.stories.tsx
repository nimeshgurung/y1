import type { Meta, StoryObj } from '@storybook/react';
import ProgressCircle from './ProgressCircle';

const meta = {
  title: 'Components/ProgressCircle',
  component: ProgressCircle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress percentage (0-100)',
    },
  },
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof ProgressCircle>;

// Default story
export const Default: Story = {
  args: {
    progress: 60,
  },
};

// Different progress values
export const Empty: Story = {
  args: {
    progress: 0,
  },
};

export const Half: Story = {
  args: {
    progress: 50,
  },
};

export const Full: Story = {
  args: {
    progress: 100,
  },
};

// Example showing multiple progress circles
export const ProgressExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <ProgressCircle progress={0} />
      <ProgressCircle progress={25} />
      <ProgressCircle progress={50} />
      <ProgressCircle progress={75} />
      <ProgressCircle progress={100} />
    </div>
  ),
};