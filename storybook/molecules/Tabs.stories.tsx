import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '@omegup-school/ui-molecules';
import { GridFive, GridNine, GridSix } from '@omegup-school/ui-assets';

const meta = {
  title: 'Atom/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tabs: [
      {
        label: 'Rapport de frais',
        Icon : GridFive
      },
      {
        label: 'Récap par parents',
        Icon : GridNine

      },
      {
        label: 'Liste des frais',
        Icon : GridSix

      }
    ],
    onSelect: (index : number) => { console.log(index) },
    selected: 0
  },
};
