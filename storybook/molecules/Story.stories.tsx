import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@omegup-school/ui-molecules';



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
    leftNavigator: {
      darkmode: 'components\assets\images\avatars\Ellipse47.png',
      lightmode: 'components\assets\images\avatars\Ellipse47.png',
      text: 'Créer une story',
    },
    items:
      [{
        avatarUrl: 'components\assets\images\avatars\Ellipse47.png',
        text: 'Team1',
      },
      {
        avatarUrl: 'components\assets\images\avatars\Ellipse47.png',
        text: 'Team2',
      },
      {
        avatarUrl: 'components\assets\images\avatars\Ellipse47.png',
        text: 'Team2',
      },
      {
        avatarUrl: 'components\assets\images\avatars\Ellipse47.png',
        text: 'Team2',
      },
      {
        avatarUrl: 'components\assets\images\avatars\Ellipse47.png',
        text: 'Team2',
      },
      {
        avatarUrl: 'components\assets\images\avatars\Ellipse47.png',
        text: 'Team2',
      },
      {
        avatarUrl: 'components\assets\images\avatars\Ellipse47.png',
        text: 'Team2',
      },
      {
        avatarUrl: 'components\assets\images\avatars\Ellipse47.png',
        text: 'Team2',
      },
      {
        avatarUrl: 'components\assets\images\avatars\Ellipse47.png',
        text: 'Team2',
      },
      {
        avatarUrl: 'components\assets\images\avatars\Ellipse47.png',
        text: 'Team2',
      },
      {
        avatarUrl: 'components\assets\images\avatars\Ellipse47.png',
        text: 'Team2',
      },
      ]
    ,
    rightNavigator: {
      darkmode: 'components\assets\images\avatars\Ellipse47.png',
      lightmode: 'components\assets\images\avatars\Ellipse47.png',
      text: 'Suivant',
    }
  },
};
