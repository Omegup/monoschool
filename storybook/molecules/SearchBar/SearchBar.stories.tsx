import type { Meta, StoryObj } from '@storybook/react';

import { SearchBar } from '@omegup-school/ui-molecules';
import { Close, SearchStatus } from '@omegup-school/ui-assets';

const IconOption = ( option:any ) => {
  switch (option) {
    case 'SearchStatus':
      return <SearchStatus width={'100%'} />;
    case 'Close':
      return <Close width={'100%'} />;
    default:
      return null;
  }
};
const meta = {
  title: 'molecule/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['navBar', 'sideBar', 'filterSearch'] },
    inputType: { control: 'select', options: ['text', 'number', 'email'] },
    firstIcon: {
      control: 'select',
      options: [
        { name: 'SearchStatus' },
        { name: 'Close'},
      ]
    },
    secondIcon: {
      control: 'select',
      options: [
        { name: 'SearchStatus' },
        { name: 'Close'},
      ]
    } },
   
    
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    placeholder: "Rechercher",
    variant:"filterSearch",
    inputType:"text",
    displayClose: true,
    firstIcon:<SearchStatus  width={'100%'}/>,
    secondIcon:<Close  width={'100%'} />,
    value: "",
    onChange: (value) => {console.log(value)},
    onClick: () => {},
  },
  
};
