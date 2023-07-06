import type { Meta, StoryObj } from '@storybook/react';
import { GridElement, Square, TextAline } from '../../components/assets'
import { ViewModeSwitcher } from '@omegup-school/ui-molecules';

const elementsViewModeRight = {  icon: <GridElement /> }
const elementsViewModeLeft = {  icon: <TextAline />}
   
const meta = {
  title: 'Atom/ViewModeSwitcher',
  component: ViewModeSwitcher,
  tags: ['autodocs'],
  argTypes: {
    
    elementRight: { control: 'select', options: [{  icon: <GridElement /> }] },
    elementLeft: { control: 'select', options: [{  icon: <TextAline /> }] },

  },
} satisfies Meta<typeof ViewModeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'ViewModeSwitcher',
    isChecked: true,
    elementRight: elementsViewModeRight,
    elementLeft: elementsViewModeLeft,
  },
};
