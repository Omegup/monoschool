export interface OutlinedInputProps {
  placeholder?: string;
  label: string;
  type?: 'password';
  disabled?: boolean;
}

export interface ControlledOutlinedInputProps extends OutlinedInputProps {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}
