import { AdvancedSearch } from '@omegup-school/ui-molecules';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atom/AdvancedSearch',
  component: AdvancedSearch,
  tags: ['autodocs'],
  argTypes: {
    chipsProps: {
      description: 'Props for Chips component',
      control: {
        type: 'object'
      }
    },
    listSearchProps: {
      description: 'Props for ListSearch component',
      control: {
        type: 'object'
      }
    },
    switchProps: {
      description: 'Props for Switch component',
      control: {
        type: 'object'
      }
    },
    tabsProps: {
      description: 'Props for TabSearch component',
      control: {
        type: 'object'
      }
    }
  },
} satisfies Meta<typeof AdvancedSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    chipsProps: {
      onCancel() {
        console.log('onCancel');
      },
      person: [
        {
          label: 'Person 1',
        },
        {
          label: 'Person 2',
        }
      ]
    },

    listSearchProps: {
      name: 'Name',
      description: 'Description'
    },

    switchProps: {
      checked: true,
      onChange() {
        console.log('onChange');
      },
      label: 'Sélectionner avec tous les éléments avec \'A\''
    },

    tabsProps: {
      tabProps: [
        { label: 'Tous', badge: 20 },
        { label: 'Apprenant', badge: 12 },
        { label: 'Parents', badge: 3 },
        { label: 'Professeur', badge: 1 }
      ],
      selectedIndex: 0,
      setSelectedIndex(index: number) {
        console.log(index);
      }
    }
  }
};
