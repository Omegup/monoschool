export type checkboxVariant = 'solid' | 'border' | 'scale';
export type checkboxSize = 'large' | 'medium' | 'small';

export type checkboxProps = {
  text? : string ,
  variant?: checkboxVariant;
  size?: checkboxSize;
  label?: string;
  enabled?: boolean;
  disabled?: boolean;
  focused?: boolean;
};