export interface TabSearchProps {
  tabProps: TabProps[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

export interface TabProps {
  label: string;
  badge?: number;
} 