export interface TabProps {
  label: string;
  Icon: ({ bold, color }: { bold: boolean, color?: string }) => JSX.Element;
  selected: boolean;
  onClick?: () => void;
}