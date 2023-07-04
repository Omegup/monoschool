export interface ViewModeSwitcherProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  name: string;
  elements: {
    id: string,
    icon: JSX.Element,
    value:boolean
  }
  elementLeft: {
    id: string,
    icon: JSX.Element,
    value:boolean
  }
  elementRight: {
    id: string,
    icon: JSX.Element,
    value:boolean
  }
}
export interface ControlledViewModeSwitcherProps extends ViewModeSwitcherProps {
 
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
