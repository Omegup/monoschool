import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { borders } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';

export const useDashboardTaskManagerContainerStyle = createUseStyles({
  container: {
    border: [borders.b2, 'solid', colorsStyles.grey_500],
    borderRadius: borders.r5,
  },
  header: {
    borderBlockEnd: borders.b2,
    borderBlockEndStyle: 'solid',
    borderBlockEndColor: colorsStyles.grey_500,
  },
  body: {},
});
