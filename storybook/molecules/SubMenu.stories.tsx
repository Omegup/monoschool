import type { Meta, StoryObj } from '@storybook/react';

import { SubMenu } from '@omegup-school/ui-molecules';



const meta = {
  title: 'Atom/SubMenu',
  component: SubMenu,
  tags: ['autodocs'],
  argTypes: {
    style: { control: 'subMenu', options: ['solid', 'border', 'text', 'flat'] },
    size: { control: 'subMenu', options: ['large', 'medium', 'small'] },
  },
} satisfies Meta<typeof SubMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    parentName: 'SubMenu',
    parentId:0,
    size: 'medium',
    style: 'solid',
    disabled: false,
    children: [/*/{ icon: "tt", label: "First Element", slected: false,style:"solid",size:"medium", control: { type: 'object' } },
     { icon: "bb", label: "Second Element", slected: false,style:"solid",size:"medium",control: { type: 'object' }  }/*/],
    isOpened: true,
    value: true


  },
};