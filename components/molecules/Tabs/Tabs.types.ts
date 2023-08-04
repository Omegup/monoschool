export interface TabsProps {
  tabs: Tabs[],
  onSelect: (index: number) => void,
  selected: number
}

export interface Tabs { label: string, Icon: ({ bold }: { bold: boolean }) => JSX.Element }
