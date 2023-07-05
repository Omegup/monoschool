import type { Meta, StoryObj } from '@storybook/react';

import { Chips } from '@omegup-school/ui-molecules';
import { Close,Add, Essential } from '@omegup-school/ui-assets';
import { ControlledChipsProps } from '@omegup-school/ui-molecules/Chips/Chips.types';

const IconOption = ( option:string ) => {
  switch (option) {
    case 'Essential':
      return <Essential width={'100%'} />;
    case 'Close':
      return <Close width={'100%'} />;
    case 'Add':
      return <Add width={'100%'} />;
    default:
      return <Close width={'100%'} />;
  }
};

type DemoType = ControlledChipsProps & { firstIcon: 'Essential' | 'Close'|'Add',secondIcon:'Essential' | 'Close'|'Add'};
const ChipsDemo = ({
  firstIcon,secondIcon,
  ...rest
}: DemoType) => {
  return (
    <Chips {...rest} firstIcon={IconOption(firstIcon)} secondIcon={IconOption(secondIcon)} />
  )
}
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'molecule/Chips',
  component: ChipsDemo,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['large', 'medium', 'small'] },
    style: { control: 'select', options: ['border' , 'flat'] } ,
    firstIcon: { control: 'select', options: ['Essential' , 'Close','Add'] } ,
    secondIcon: { control: 'select', options: ['Essential' , 'Close','Add'] } ,
  },
   

} satisfies Meta<typeof ChipsDemo>;

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
    firstIcon: "SearchStatus",
    secondIcon: "Close",
  },
};
