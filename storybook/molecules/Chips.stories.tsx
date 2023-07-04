import type { Meta, StoryObj } from '@storybook/react';

import { Chips } from '@omegup-school/ui-molecules';
import { Close, Essential } from '@omegup-school/ui-assets';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'molecule/Chips',
  component: Chips,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['large', 'medium', 'small'] },
    style: { control: 'select', options: ['border' , 'flat'] } 
  },
   

} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Label",
    style:"border",
    size: 'medium',
    disabled: false,
    value:false,
    onChange: () => {},
    onClick:()=>{},
    icon: <Essential width={"100%"} />,
    iconClose: <Close width={"100%"} />
  },
};

