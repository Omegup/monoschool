import type { Meta, StoryObj } from '@storybook/react';

import { Filter } from '../../../components/molecules/FilterElements';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Atom/Filter',
  component: Filter,
  tags: ['autodocs'],
  argTypes: {
   
  },
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    
    label: 'Filter',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Filter',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Filter',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Filter',
  },
};

