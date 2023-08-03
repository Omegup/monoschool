export interface TabSearchProps {
  tabProps: TabProps[];
  selectedIndex: number;
}

export interface TabProps {
  label: string;
  badge?: number;
  onClick: () => void;
} 