import type { Meta, StoryObj } from '@storybook/react';

import { SearchBar } from '@omegup-school/ui-molecules';
import { Close, SearchStatus } from '@omegup-school/ui-assets';
import { ControlledSearchBarProps } from '@omegup-school/ui-molecules/SearchBar/SearchBar.types';

const IconOption = ( option:string ) => {
  switch (option) {
    case 'SearchStatus':
      return <SearchStatus width={'100%'} />;
    case 'Close':
      return <Close width={'100%'} />;
    default:
      return <SearchStatus width={'100%'} />;
  }
};

type DemoType = ControlledSearchBarProps & { firstIcon: 'SearchStatus' | 'Close',secondIcon:'SearchStatus' | 'Close'};
const SelectDemo = ({
  firstIcon,secondIcon,
  ...rest
}: DemoType) => {
  return (
    <SearchBar {...rest} firstIcon={IconOption(firstIcon)} secondIcon={IconOption(secondIcon)} />
  )
}
const meta = {
  title: 'molecule/SearchBar',
  component: SelectDemo,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['navBar', 'sideBar', 'filterSearch'] },
    inputType: { control: 'select', options: ['text', 'number', 'email'] },
    firstIcon:{ control: 'select', options: ['SearchStatus' ,'Close'] },
    secondIcon:{ control: 'select',  options: ['SearchStatus' ,'Close'] },
    } 
   
    
} satisfies Meta<typeof SelectDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    placeholder: "Rechercher",
    variant:"filterSearch",
    inputType:"text",
    displayClose: true,
    firstIcon:"SearchStatus",
    secondIcon:"Close",
    value: "",
    onChange: (value) => {console.log(value)},
    onClick: () => {},
  },
  
};
