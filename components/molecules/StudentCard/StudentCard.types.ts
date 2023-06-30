export interface StudentCardProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  disabled?: boolean;
  label: string;
}

export interface ControlledStudentCardProps extends StudentCardProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
