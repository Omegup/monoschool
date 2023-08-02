import { ReactNode } from 'react';

export interface FieldProps {
  variant: 'spaced' | 'condensed';
  label?: string;
  required: boolean;
  infoText?: string;
  descriptionText?: string;
  color: 'error' | 'info' | 'success' | 'warning' | 'default';
  disabled?: boolean;
  input: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
