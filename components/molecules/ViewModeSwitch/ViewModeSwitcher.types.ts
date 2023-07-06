export interface ViewModeSwitcherProps {

  name: string;
  isChecked?:boolean
  
  elementLeft:  JSX.Element,
  elementRight:  JSX.Element,
}
export interface ControlledViewModeSwitcherProps extends ViewModeSwitcherProps {
 
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
