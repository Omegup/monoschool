export interface ViewModeSwitcherProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  icon: JSX.Element[];
}

export interface ControlledViewModeSwitcherProps extends ViewModeSwitcherProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
