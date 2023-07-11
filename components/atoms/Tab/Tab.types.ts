export interface TabProps {
  label: string;
  Icon: ({ bold }: { bold: boolean }) => JSX.Element;
  selected : boolean;
  onClick?: () => void;
}