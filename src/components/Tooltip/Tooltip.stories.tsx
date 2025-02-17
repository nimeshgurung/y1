import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import { Tooltip } from './Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    title: 'Standard tooltip',
    children: <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="secondary">Hover me</Button>
    </div>,
  },
};

export const Jumbo: Story = {
  args: {
    title: 'Tooltip that can contain multiple lines of text for more complex descriptions.',
    variant: 'jumbo',
    children: <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="primary">Hover for jumbo tooltip</Button>
    </div>,
  },
};

export const WithButton: Story = {
  args: {
    title: 'Button tooltip',
    children: <div style={{ display: 'flex', justifyContent: 'center' }}><Button variant="secondary">Hover me</Button></div>,
  },
};

export const WithCustomPlacement: Story = {
  args: {
    title: 'Right tooltip',
    placement: 'right',
    children: <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="secondary">Right aligned tooltip</Button>
    </div>,
  },
};
