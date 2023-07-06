import type { Meta, StoryObj } from '@storybook/react';

import { FilterCheckBox } from '@omegup-school/ui-molecules';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'molecule/FilterCheckBox',
  component: FilterCheckBox,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FilterCheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Text cell',
    showImage: false,
    imageURL: 'https://www.w3schools.com/howto/img_avatar.png',
    checkbox:<>box</>,
    value: false,
    onChange: () => {},
  },
};
