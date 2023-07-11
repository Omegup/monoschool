import type { Meta, StoryObj } from '@storybook/react';
import { GridElement, Square, TextAlign, Tick, UserTick } from '../../components/assets'
import { ViewModeSwitcher } from '@omegup-school/ui-atoms';
import { ViewModeSwitcherProps } from '@omegup-school/ui-atoms/ViewModeSwitcher/ViewModeSwitcher.types';
 const elementsViewModeRight = { icon: <GridElement /> }
const elementsViewModeLeft = { icon: <TextAlign /> }
 


const meta = {
  title: 'Atom/ViewModeSwitcher',
  component: ViewModeSwitcher,
  tags: ['autodocs'],
  argTypes: {
    elementRight: { },
    elementLeft: {  },
    // control: 'select', options: [<UserTick />]
  },
} satisfies Meta<typeof ViewModeSwitcher>;
 
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
     isChecked: true,
    elementRight: <GridElement />,
    elementLeft: <TextAlign />,
  },
};
