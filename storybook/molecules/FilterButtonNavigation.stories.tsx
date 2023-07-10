import type { Meta, StoryObj } from '@storybook/react';

import { FilterListeButton } from '@omegup-school/ui-molecules';
import { Icon } from './Icon';
import { ControlledFilterButtonProps } from '@omegup-school/ui-atoms/FilterButton/FilterButton.types';

const Demo = ({ icon, ...restProps }: Omit<ControlledFilterButtonProps>) => {
  return <FilterListeButton {...restProps} />;
};
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'molecule/Filter1',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof Demo>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    data: [
      {
        showIcon: true,
        label: 'text label',
        icon: <Icon name={'ArrowRight'} width="20px" />,
        active: false,
        onClick: () => {},
      },
      {
        showIcon: false,
        label: 'text label fgdfgdfg',
        icon: <Icon name={'ArrowRight'} width="20px" />,
        active: true,
        onClick: () => {},
      },
    ],
  },
};
