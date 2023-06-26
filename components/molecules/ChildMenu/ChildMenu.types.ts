export interface ChildMenuProps {
  style?: 'solid' | 'border' | 'flat' | 'text';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  icon?: string,
  label: string,
  selected?: boolean
}

export interface ControlledChildMenuProps extends ChildMenuProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
