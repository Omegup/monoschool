export interface ChildMenuProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  disabled?: boolean;
  Icon?: JSX.Element ,
  label: string,
  selected?: boolean
}

export interface ControlledChildMenuProps extends ChildMenuProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
 