import { TabSearch } from '@omegup-school/ui-molecules';
import { TabSearchProps, TabsSearchProps } from '@omegup-school/ui-molecules/TabSearch/TabSearch.types';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const TabSearchDemo = () => {

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const tabProps: TabSearchProps[] = [{ label: 'Tous', badge: 20, onClick: () => setSelectedIndex(0), },
  { label: 'Apprenant', badge: 12, onClick: () => setSelectedIndex(1) },
  { label: 'Parents', badge: 3, onClick: () => setSelectedIndex(2) },
  { label: 'Professeur', onClick: () => setSelectedIndex(3) },
  ];

  const props: TabsSearchProps = { selectedIndex, tabProps };

  return <TabSearch {...props} />;
};

const meta = {
  title: 'Atom/TabSearch',
  component: TabSearchDemo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TabSearchDemo>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
