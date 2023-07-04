import { colors } from '@omegup-school/ui-atoms/colors';
import { borders } from '@omegup-school/ui-atoms/sizes';
import { createUseStyles } from 'react-jss';

export const commonBorder = `1px solid ${colors.background.overlay}`;

export const useTableLineStyles = createUseStyles({
  tableLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: borders.b2,
    backgroundColor: 'transparent',
    borderRight: commonBorder,
    borderBottom: commonBorder,
    borderLeft: commonBorder,
    maxHeight: 40,
    padding: 0,
    '&:hover': {
      backgroundColor: colors.light[100],
    },
  },
  tableLineSelected: {
    backgroundColor: colors.light[300],
    '&:hover': {
      backgroundColor: colors.light[300],
    },
  },
  tableLineFullWidth: {
    width: '100%',
  },
});
