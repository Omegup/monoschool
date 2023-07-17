import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@omegup-school/ui-molecules';
import { useRef } from 'react';



const meta = {
  title: 'Atom/Story',
  component: Story,
  tags: ['autodocs'],
  argTypes: {

    


  },
} satisfies Meta<typeof Story>;

export default meta;
type Story = StoryObj<typeof Story>;

export const Primary: Story = {
  args: {
    createElement: {
      darkMode: 'AddCircleDark',
      lightMode: 'AddCircle',
      text: 'Créer une story',
    },
    leftNavigator: {
      darkMode: 'ArrowCirclePrevDark',
      lightMode: 'ArrowCirclePrev',
      text: 'précedent',
    },
    items:
      [...Array(20).fill('').map((_, i) => ({
        avatarUrl : 'avatarCamela',
        text: `team ${i}`,
      }))
      ]
    ,
    rightNavigator: {
      darkMode: 'ArrowCircleDark',
      lightMode: 'ArrowCircle',
      text: 'Suivant',
    }
  },
};
