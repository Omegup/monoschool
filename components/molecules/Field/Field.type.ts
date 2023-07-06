import { SimpleColors } from '@omegup-school/ui-configs/colors';
import { ReactNode } from 'react';

interface FieldProps {
  variant: 'spaced' | 'condensed';
  label?: string;
  required: boolean;
  infoText?: string;
  descriptionText?: string;
  color: 'danger' | 'info' | 'success' | 'warning' | 'default';
  disabled?: boolean;
  input: ReactNode;
}
export interface ControlledFieldProps extends FieldProps {
  value: any;
  onChange: (value: any) => void;
}
