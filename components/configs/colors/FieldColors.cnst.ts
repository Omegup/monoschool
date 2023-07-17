import { colorsStyles } from "./colors";

export const FIELD_COLORS: {
  [k in
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'default']: keyof typeof colorsStyles;
} = {
  error: 'danger_700',
  default: 'grey_500',
  info: 'headline_500',
  success: 'success_700',
  warning: 'warning_600',
};