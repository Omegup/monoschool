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
      darkmode: 'components\assets\images\avatars\Ellipse47.png',
      lightmode: 'components\assets\images\avatars\Ellipse47.png',
      text: 'Créer une story',
    },
    leftNavigator: {
      darkmode: 'components\assets\images\avatars\Ellipse47.png',
      lightmode: 'components\assets\images\avatars\Ellipse47.png',
      text: 'précedent',
    },
    items:
      [...Array(20).fill('').map((_, i) => ({
        avatarUrl: 'components\assets\images\avatars\Ellipse47.png',
        text: `team ${i}`,
      }))


      ]
    ,
    rightNavigator: {
      darkmode: 'components\assets\images\avatars\Ellipse47.png',
      lightmode: 'components\assets\images\avatars\Ellipse47.png',
      text: 'Suivant',
    }
  },
};
