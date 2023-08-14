export interface SelectContainerProps {
  variant: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  label: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export interface ControlledSelectContainerProps extends SelectContainerProps {
}
