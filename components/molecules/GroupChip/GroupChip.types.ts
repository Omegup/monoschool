export interface GroupChipsProps {
  label: string;
  persons: {name : string, avatar : JSX.Element}[];
  onCancel: (index: number) => void;
}