import type { Meta, StoryObj } from '@storybook/react';
import { TabSearch } from '@omegup-school/ui-molecules';
import { TabProps, TabSearchProps } from '@omegup-school/ui-molecules/TabSearch/TabSearch.types';
import { useEffect, useState } from 'react';

const TabSearchDemo = ({ selectedTabIndex }: { selectedTabIndex: number }) => {

  const [selectedIndex, setSelectedIndex] = useState<number>(selectedTabIndex);

  const tabProps: TabProps[] = [{ label: 'Tous', badge: 20, onClick: () => setSelectedIndex(0), },
  { label: 'Apprenant', badge: 12, onClick: () => setSelectedIndex(1) },
  { label: 'Parents', badge: 3, onClick: () => setSelectedIndex(2) },
  { label: 'Professeur', onClick: () => setSelectedIndex(3) },
  ];

  useEffect(() => setSelectedIndex(selectedTabIndex), [selectedTabIndex]);

  const props: TabSearchProps = { selectedIndex, tabProps };

  return <TabSearch {...props} />;
};

const meta = {
  title: 'Atom/TabSearch',
  component: TabSearchDemo,
  tags: ['autodocs'],
  argTypes: {
    selectedTabIndex: {
      control: {
        type: 'number',
        min: 0,
        max: 3,
      },
    },
  },
} satisfies Meta<typeof TabSearchDemo>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    selectedTabIndex: 0,
  },
};
