import { TabProps } from "../TabSearch/TabSearch.types";

export interface AdvancedSearchProps {
  switchProps: {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
  }
  tabsProps: {
    tabProps: TabProps[],
    selectedIndex: number,
    setSelectedIndex: (index: number) => void,
  },
  chipsProps: {
    person: { label: string, avatar?: string }[];
    onCancel: () => void;
  }
  listSearchProps: {
    name: string;
    avatar?: string;
    description?: string;
  }
}