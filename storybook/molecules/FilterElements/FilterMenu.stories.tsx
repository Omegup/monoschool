import type { Meta, StoryObj } from '@storybook/react';

import { FilterButton, FilterMenu } from '@omegup-school/ui-molecules';
import { ArrowRight } from '@omegup-school/ui-assets';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'molecule/FilterMenu',
  component: FilterMenu,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FilterMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    size: 'medium',
    style: 'solid',
    child: [
      <FilterButton
      showIcon={true}
      label={"Classe"}
      onClick={()=>{}}
      onBlur={()=>{}}
      icon={<ArrowRight bold={true} width={"100%"} />}
    />
    ],
  },
};
