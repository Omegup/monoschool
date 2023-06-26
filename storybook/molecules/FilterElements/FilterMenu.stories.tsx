import type { Meta, StoryObj } from '@storybook/react';

import { FilterMenu } from '@omegup-school/ui-molecules';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'molecule/FilterMenu',
  component: FilterMenu,
  tags: ['autodocs'],
  argTypes: {
    style: { control: 'select', options: ['solid', 'border', 'text', 'flat'] },
    size: { control: 'select', options: ['large', 'medium', 'small'] },
  },
} satisfies Meta<typeof FilterMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    size: 'medium',
    style: 'solid',
    child: [
      {
        style: 'solid',
        size: 'medium',
        showIcon: true,
        label: 'Apprenant',
        value: false,
        onChange: () => {},
        onBlur: () => {},
      },
      {
        style: 'solid',
        size: 'medium',
        showIcon: true,
        label: 'Classe',
        value: false,
        onChange: () => {},
        onBlur: () => {},
      },
      {
        style: 'solid',
        size: 'medium',
        showIcon: false,
        label: "Facturé aujoud'hui",
        value: false,
        onChange: () => {},
        onBlur: () => {},
      },
      {
        style: 'solid',
        size: 'medium',
        showIcon: false,
        label: "Facturé ce mois ci",
        value: false,
        onChange: () => {},
        onBlur: () => {},
      },
    ],
  },
};
