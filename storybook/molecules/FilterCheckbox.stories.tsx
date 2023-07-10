import type { Meta, StoryObj } from '@storybook/react';

import { FilterListeChekbox } from '@omegup-school/ui-molecules';

import { Ellipse47, Ellipse57, Ellipse71 } from '@omegup-school/ui-assets';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'molecule/Filter2',
  component: FilterListeChekbox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FilterListeChekbox>;

export default meta;
type Story = StoryObj<typeof FilterListeChekbox>;
const states = {
  checked: false,
  disabled: false,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    data: [
      {
        label: 'Bacem achour',
        showImage: true,
        imageURL: Ellipse71,

        onChange: () => {
          console.log();
        },

        onBlur: () => {
          console.log('blur');
        },
        ...states,
      },
      {
        label: 'Sana Binhamed',
        showImage: true,
        imageURL: Ellipse47,

        onChange: () => {
          console.log();
        },

        onBlur: () => {
          console.log('blur');
        },
        ...states,
      },
      {
        label: 'Atef Chrigui',
        showImage: true,
        imageURL: Ellipse57,

        onChange: () => {
          console.log();
        },

        onBlur: () => {
          console.log('blur');
        },
        ...states,
      },
      {
        label: 'Jihen brahim',
        showImage: true,
        imageURL: Ellipse47,

        onChange: () => {
          console.log();
        },

        onBlur: () => {
          console.log('blur');
        },
        ...states,
      },
    ],
  },
};
