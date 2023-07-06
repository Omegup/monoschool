import type { Meta, StoryObj } from '@storybook/react';
import { GridElement, Square, TextAline } from '../../components/assets'
import { ControlledViewModeSwitcherProps, ViewModeSwitcher } from '@omegup-school/ui-molecules';
import { Icon } from './Icon';
const elementsViewModeRight =  <GridElement /> 
const elementsViewModeLeft = <TextAline />
// const Demo = ({
//   elementLeft,elementRight,
//   ...restProps
// }: Omit<ControlledViewModeSwitcherProps, 'icon'> & { icon: keyof typeof Icon }) => {
//   return <ViewModeSwitcher elementLeft={<Icon name={'GridElement'} />,elementRight={{<Icon name={'GridElement'}}}/>, {...restProps} />;
// };
 
const meta = {
  title: 'Atom/ViewModeSwitcher',
  component: ViewModeSwitcher,
  tags: ['autodocs'],
  argTypes: {
    
    elementRight: { control: 'select', options: [  <GridElement /> ,<TextAline />,<TextAline />] },
    elementLeft: { control: 'select', options: [   <TextAline /> ] },

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
