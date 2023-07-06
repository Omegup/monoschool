import type { Meta, StoryObj } from '@storybook/react';

import { FilterButton } from '@omegup-school/ui-molecules';
import { ArrowRight } from '@omegup-school/ui-assets';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'molecule/FilterButton',
  component: FilterButton,
  tags: ['autodocs'],
  argTypes: {
    
  },
   

} satisfies Meta<typeof FilterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Text cell',
    icon:  <ArrowRight bold={true} width={"100%"} />,
    showIcon: true,
    onClick: () =>{},
    onBlur: () => {},
  },
};

