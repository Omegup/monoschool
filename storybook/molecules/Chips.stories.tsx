import type { Meta, StoryObj } from '@storybook/react';
import { Close,Add, Essential } from '@omegup-school/ui-assets';
import { Chips, ControlledChipsProps } from '@omegup-school/ui-molecules';


const IconOption = ( option:string ) => {
  switch (option) {
    case 'Essential':
      return <Essential width={'100%'} />;
    case 'Close':
      return <Close width={'100%'} />;
    case 'Add':
      return <Add width={'100%'} />;
    default:
      return <Close width={'100%'} />;
  }
};


const ChipsDemo =  ({ClearIcon,...rest}:Omit<ControlledChipsProps, "children">&{ClearIcon:string} ) => {
  
 
  return (
   <Chips  {...rest} ClearIcon={IconOption(ClearIcon)} label={''}></Chips>
  );
};

const meta = {
  title: 'Molecules/Chips',
  component: Chips,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'flat',
        'border']
    },
    firstIcon: { control: 'select', options: ['Essential' , 'Close','Add', 'SearchStatus'] } ,
    ClearIcon: { control: 'select', options: ['Essential' , 'Close','Add'] } ,
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<Partial<typeof Chips>>;

export default meta;
type Story = StoryObj<typeof meta>;

const states = {
  
};

export const Border: Story = {
  args: {
    label: 'label',
    size: 'medium',
    variant: 'border',
    checked: false,
    disabled: false,
    icon:<Essential width='100%' />,
    ClearIcon:<Close width='100%'/>
  },
};
export const Flat: Story = {
  args: {
    label: 'label',
    size: 'medium',
    variant: 'flat',
    checked: false,
    disabled: false,
    icon:<Essential width='100%' />,
    ClearIcon:<Close width='100%'/>
  },
};