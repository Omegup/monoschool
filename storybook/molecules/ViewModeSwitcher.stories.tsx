import type { Meta, StoryObj } from '@storybook/react';
import { GridElement, Square, TextAline, Tick } from '../../components/assets'
import { ViewModeSwitcher } from '@omegup-school/ui-molecules';
import { Icon } from './Icon';
const elementsViewModeRight = { icon: <GridElement /> }
const elementsViewModeLeft = { icon: <TextAline /> }


const meta = {
  title: 'Atom/ViewModeSwitcher',
  component: ViewModeSwitcher,
  tags: ['autodocs'],
  argTypes: {
    elementRight: { control: 'select', options: [<Square />] },
    elementLeft: { control: 'select', options: [<Tick />] },
  },
} satisfies Meta<typeof ViewModeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
     isChecked: true,
    elementRight: <GridElement />,
    elementLeft: <TextAline />,
  },
};
