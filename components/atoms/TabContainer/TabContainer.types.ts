export interface TabSearchProps {
  selected : boolean;
  label: string;
  badge?: number;
  onClick?: () => void;
  // tabProps: TabProps[];
  // selectedIndex: number;
  // setSelectedIndex: (index: number) => void;
}

export interface TabProps {
  label: string;
  badge?: number;
}
