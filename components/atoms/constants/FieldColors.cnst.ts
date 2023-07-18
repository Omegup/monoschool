import { NakedInputProps } from '../NakedInput/NakedInput.type';

export const FIELD_COLORS: {
  [k in
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'default']: NakedInputProps['borderColor'];
} = {
  error: 'danger_700',
  default: 'grey_500',
  info: 'headline_500',
  success: 'success_700',
  warning: 'warning_600',
};
