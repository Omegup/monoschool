export interface TabsSearchProps {
  tabProps: TabSearchProps[];
  selectedIndex: number;
}

export interface TabSearchProps {
  label: string;
  badge?: number;
  onClick: () => void;
} 