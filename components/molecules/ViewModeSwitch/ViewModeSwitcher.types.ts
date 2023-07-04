export interface ViewModeSwitcherProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  name: string;
  value:boolean
  
  elementLeft: {
    id: string,
    icon: JSX.Element,
   
  }
  elementRight: {
    id: string,
    icon: JSX.Element,
   
  }
}
export interface ControlledViewModeSwitcherProps extends ViewModeSwitcherProps {
 
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
