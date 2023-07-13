import type { Meta, StoryObj } from '@storybook/react';

import { CardFeeStudent } from '@omegup-school/ui-molecules';
import { ClipboardTick, Tick, UserTick, WifiSquare } from '@omegup-school/ui-assets';
import { ControlledSubMenuProps } from '@omegup-school/ui-molecules/SubMenu/SubMenu.types';
import { ControlledCardFeeStudentProps } from '@omegup-school/ui-molecules/CardFeeStudent/CardFeeStudent.types';
import { Icon } from './Icon';
import * as icons from '@omegup-school/ui-assets/icons';


const Demo = ({
  avatar,
  ...restProps
}: Omit<ControlledCardFeeStudentProps, 'icon'> & { avatar: keyof typeof icons }) => {
  console.log({avatar})
  return <div style={{ maxWidth: 230 }}>
    <CardFeeStudent avatar={avatar} {...restProps} />
     </div> ;
};

const meta = {
  title: 'Atom/CardFeeStudent',
  component: CardFeeStudent,
  tags: ['autodocs'],
  argTypes: {
    avatar: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    status: {
      control: 'select',
      options:  ['success' , 'warning' ,'error' ,'active' ,'info' ,'inactive'],
    },
    statusText: {
      control: 'select',
      options:  ['Payée' , 'En Attente' ,'Non Payée' , 'Dispencé'],
    },
  
  },
} satisfies Meta<typeof CardFeeStudent>;

export default meta;
type Story = StoryObj<typeof Demo>;
export const Primary: Story = {
  render: Demo,
  args: {
    textName: "Yassine Brahim",
    avatar: 'Avatar',
    amount: '100.000DT',
    date: '10/15/2200',
    status: 'success' ,
    statusText:'Payée',
    subscription: "Abonnement de Transport "
  },
};
