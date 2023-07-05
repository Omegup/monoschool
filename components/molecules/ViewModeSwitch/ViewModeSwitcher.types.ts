export interface ViewModeSwitcherProps {

  name: string;
  isChecked?:boolean
  
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
