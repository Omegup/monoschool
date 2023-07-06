export interface ChildMenuProps {
  size: 'large' | 'medium' | 'small';
  icon?: JSX.Element ,
  label: string,
  selected: boolean,
  isCollopsed?:boolean,
  viewMode?:'mobile'|'default'
}
export interface ControlledChildMenuProps extends ChildMenuProps {
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
 