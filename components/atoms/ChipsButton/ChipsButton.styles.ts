import { widths } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';

export const useChipsButtonStyles = createUseStyles({
  button: {
    all: 'unset',
    cursor: 'pointer',
  },
  ClearIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  large: { width: widths.chips.large },
  medium: { width: widths.chips.medium },
  small: { width: widths.chips.small },
});
