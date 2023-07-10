import type { Meta, StoryObj } from '@storybook/react';
import { GridElement, Square, TextAline, Tick } from '../../components/assets'
import { ViewModeSwitcher } from '@omegup-school/ui-atoms';
import { ViewModeSwitcherProps } from '@omegup-school/ui-atoms/ViewModeSwitcher/ViewModeSwitcher.types';
 const elementsViewModeRight = { icon: <GridElement /> }
const elementsViewModeLeft = { icon: <TextAline /> }
const Demo = (props: ViewModeSwitcherProps) => {
  
  return  <div style={{ width: 300 }}>
     
     
  </div>
}


const meta = {
  title: 'Atom/ViewModeSwitcher',
  component: Demo,
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
