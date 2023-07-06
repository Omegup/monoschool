export interface ViewModeSwitcherProps {

  name: string;
  isChecked?:boolean
  
  elementLeft: {
    icon: JSX.Element,
     }
  elementRight: {
    icon: JSX.Element,
  }
}
export interface ControlledViewModeSwitcherProps extends ViewModeSwitcherProps {
 
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
