import type { Meta, StoryObj } from '@storybook/react';

import { FilterListeCheckBox } from '@omegup-school/ui-molecules';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'molecule/FilterListeCheckBox',
  component: FilterListeCheckBox,
  tags: ['autodocs'],
  argTypes: {
    style: { control: 'select', options: ['solid', 'border', 'text', 'flat'] },
    size: { control: 'select', options: ['large', 'medium', 'small'] },
  },
   

} satisfies Meta<typeof FilterListeCheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {

    size: 'medium',
    style: 'solid',
    showImage:true

  },
};

