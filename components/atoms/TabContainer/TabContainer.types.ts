export interface TabSearchProps {
  children: React.ReactNode;
  selected: boolean;
  onClick?: () => void;
}

export interface TabProps {
  label: string;
  badge?: number;
}
