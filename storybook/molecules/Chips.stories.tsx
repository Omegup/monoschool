import type { Meta, StoryObj } from '@storybook/react';


import { Close,Add, Essential } from '@omegup-school/ui-assets';
import { Chips,ControlledChipsProps } from '@omegup-school/ui-molecules';


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

type DemoType = Omit<ControlledChipsProps, 'secondIcon' | 'icon'> & { firstIcon: 'Essential' | 'Close'|'Add' | 'SearchStatus',secondIcon:'Essential' | 'Close'|'Add' | 'Close'};
const ChipsDemo = ({
  firstIcon,secondIcon,onChange,
  ...rest
}: DemoType) => {
  return (
    <Chips {...rest} onChange={onChange} icon={IconOption(firstIcon)} secondIcon={IconOption(secondIcon)} />
  )
}
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'molecules/Chips',
  component: ChipsDemo,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['large', 'medium', 'small'] },
    variant: { control: 'select', options: ['border' , 'flat'] } ,
    firstIcon: { control: 'select', options: ['Essential' , 'Close','Add', 'SearchStatus'] } ,
    secondIcon: { control: 'select', options: ['Essential' , 'Close','Add'] } ,
  },
   

} satisfies Meta<typeof ChipsDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Label",
    variant:"border",
    size: 'medium',
    disabled: false,
    firstIcon: "SearchStatus",
    secondIcon: "Close",
    children: null,
    value: true,
  },
};

