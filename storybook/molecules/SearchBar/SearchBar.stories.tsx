import type { Meta, StoryObj } from '@storybook/react';

import { SearchBar } from '@omegup-school/ui-molecules';
import { SearchStatus } from '@omegup-school/ui-assets';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'molecule/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['large', 'medium', 'small'] },
  },
   

} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Rechercher",
    style:"text",
    size: 'medium',
    displayClose: true,
    Icon:SearchStatus,
    value: "",
    onChange: () => {},
    onBlur: () => {},
  },
};

