export interface TabsProps {
  tabs: { label: string, Icon?: ({ bold }: { bold: boolean }) => JSX.Element }[],
  onSelect: (index: number) => void,
  selected: number
}