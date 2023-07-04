import { createUseStyles } from 'react-jss';
import { borders } from '@omegup-school/ui-atoms/sizes';
import { colors } from '@omegup-school/ui-atoms/colors';

export const useTableLineSummaryStyles = createUseStyles({
  tableLineSummary: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: borders.r5,
    borderBottomRightRadius: borders.r5,
    backgroundColor: colors.background.secondary,
    border: `1px solid ${colors.background.overlay}`,
    borderTop: 'none',
    maxHeight: 40,
    padding: 0,
  },
});
