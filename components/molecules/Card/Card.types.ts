export interface CardProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  label: string;
}

export interface ControlledCardProps extends CardProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
