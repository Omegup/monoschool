import type { Meta, StoryObj } from '@storybook/react';

import { SearchBar } from '@omegup-school/ui-molecules';
import { Close, SearchStatus } from '@omegup-school/ui-assets';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'molecule/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['large', 'medium', 'small'] },
    inputType: { control: 'select', options: ['text', 'number', 'email'] },
    Icon: {
      control: 'select',
      options: [
        { name: 'SearchStatus', value: <SearchStatus width={'100%'} /> },
        { name: 'Close', value: <Close width={'100%'} /> },
        { name: 'SearchStatus', value: <SearchStatus width={'100%'} /> }
      ]
    },
    closeIcon: {
      control: 'select',
      options: [
        { name: 'SearchStatus', value: <SearchStatus width={'100%'} /> },
        { name: 'Close', value: <Close width={'100%'} /> },
        { name: 'SearchStatus', value: <SearchStatus width={'100%'} /> }
      ]
    } },
   

} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    placeholder: "Rechercher",
    size: 'medium',
    inputType:"text",
    displayClose: true,
    Icon:<SearchStatus  width={'100%'}/>,
    closeIcon:<Close  width={'100%'} />,
    value: "",
    onChange: (value) => {console.log(value)},
    onClick: () => {},
  },
};

