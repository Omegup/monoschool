import type { Meta, StoryObj } from '@storybook/react';

import { FilterCheckBox, SubFilterMenu } from '@omegup-school/ui-molecules';
import { Ellipse46, Ellipse47, Ellipse48, Ellipse49} from '@omegup-school/ui-assets';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'molecule/SubFilterMenu',
  component: SubFilterMenu,
  tags: ['autodocs'],
  argTypes: {

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
    child:[  <FilterCheckBox
      label={"Sana Binhamed"}
      showImage={true}
      value={false}
      onChange={()=>{}}
      onBlur={()=>{}}
      imageURL={Ellipse46} 
      checkbox={undefined}          />

    ,<FilterCheckBox
    label={"Atef chrigui"}
    showImage={true}
    value={false}
    onChange={()=>{}}
    onBlur={()=>{}}
    imageURL={Ellipse46} 
    checkbox={undefined}          />
    ]

  },
};

