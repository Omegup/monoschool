import { colors } from '@omegup-school/ui-configs/colors';
import { createUseStyles } from 'react-jss';
import { Color } from './DataTableDashboardLine.types';
import { typography } from '@omegup-school/ui-configs/typography/typography.cnst';

export const useStyles = createUseStyles(({ color }: { color: Color }) => ({
  containerBodyLine: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid ' + colors.headline[500],
    backgroundColor: color === 'lightBlue' ? colors.light[100] : colors.light[200],
  },
  containerHeaderLine: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid ' + colors.headline[500],
    backgroundColor: color === 'lightBlue' ? colors.light[100] : colors.light[200],
  },
  cellBody: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: "10px 40px",
    color: colors.headline[500],
    fontFamily: typography.paragraph.medium.medium.fontSize,
    fontSize: typography.paragraph.medium.medium.fontWeight,
  },
  cellHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: "10px 40px",
    color: colors.headline[900],
    fontFamily: typography.paragraph.medium.medium.fontSize,
    fontSize: typography.paragraph.medium.medium.fontWeight,
  },
}));