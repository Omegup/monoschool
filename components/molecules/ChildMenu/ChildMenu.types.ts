export interface ChildMenuProps {
  // style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
   icon?: JSX.Element ,
  label: string,
  selected: boolean,
  id:number,
  isCollopsed?:boolean,
  viewMode?:'mobile'|'default'
}

export interface ControlledChildMenuProps extends ChildMenuProps {
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
 