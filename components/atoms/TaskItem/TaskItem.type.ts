export interface TaskItemProps {
  text: string;
  checked: boolean;
  finishedTaskText: string;
}

export interface ControlledTaskItemProps extends TaskItemProps {
  onClick: () => void;
}
