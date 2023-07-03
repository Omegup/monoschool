export interface NavBarMobileProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  disabled?: boolean;
 
  items:  {
    icon?: JSX.Element ,
    label: string,
    selected: boolean,
    id:number,
  }[]
}

export interface ControlledNavBarMobileProps extends NavBarMobileProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
