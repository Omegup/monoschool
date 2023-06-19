export interface SelectProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  disabled?: boolean;
  label: string;
}

export interface ControlledSelectProps extends SelectProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
