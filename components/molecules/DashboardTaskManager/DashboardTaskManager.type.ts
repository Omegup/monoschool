export interface DashboardTaskManagerProps {
  dictionary: { label: string; finishedTaskText: string };
  list: { id: any; text: string; checked: boolean }[];
  onPersonnelClick: (id: any) => void;
  onTaskClick: (id: any) => void;
  personnel: { id: any; img: string }[];
  selectedPersonel: any;
}
