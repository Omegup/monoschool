import type { Meta, StoryObj } from '@storybook/react';
import  { GridElement,TextAline } from '../../components/assets'

import { ViewModeSwitcher } from '@omegup-school/ui-molecules';
const elementsViewMode=[{id:"1",icon:<GridElement/>,value:true},{id:"1",icon:<TextAline/>,value:false}]
const meta = {
  title: 'Atom/ViewModeSwitcher',
  
  component: ViewModeSwitcher,
  tags: ['autodocs'],
  argTypes: {
    style: { control: 'select', options: ['solid', 'border', 'text', 'flat'] },
    size: { control: 'select', options: ['large', 'medium', 'small'] },
  },
} satisfies Meta<typeof ViewModeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
   
    name: 'ViewModeSwitcher',
    size: 'medium',
    style: 'solid',
    elements:elementsViewMode
   },
};
