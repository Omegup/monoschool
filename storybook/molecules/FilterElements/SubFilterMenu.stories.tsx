import type { Meta, StoryObj } from '@storybook/react';

import { SubFilterMenu } from '@omegup-school/ui-molecules';
import { Ellipse46, Ellipse47, Ellipse48, Ellipse49} from '@omegup-school/ui-assets';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'molecule/SubFilterMenu',
  component: SubFilterMenu,
  tags: ['autodocs'],
  argTypes: {

    size: { control: 'select', options: ['large', 'medium', 'small'] },
  },
   

} satisfies Meta<typeof SubFilterMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Rechercher",
    size: 'medium',
    showImage:true,
    SearchBar:"searchBar",
    child:[{   <FilterCheckBox
      label={item.label}
      showImage={showImage}
      value={item.value}
      onChange={item.onChange}
      onBlur={item.onBlur}
      imageURL={item.imageURL} 
      checkbox={undefined}          />

    },{ size:"medium" ,
    label:"Sana Binhamed",
    showImage:true,
     value:false,
      onChange:()=>{} ,
      onBlur:()=>{},
       imageURL:Ellipse46,

  },{ size:"medium" ,
  label:"Atef chrigui",
  showImage:true,
   value:false,
    onChange:()=>{} ,
    onBlur:()=>{},
     imageURL:Ellipse48,

},{ size:"medium" ,
label:"Jihen brahim",
showImage:true,
 value:false,
  onChange:()=>{} ,
  onBlur:()=>{},
   imageURL:Ellipse49,

}]

  },
};

