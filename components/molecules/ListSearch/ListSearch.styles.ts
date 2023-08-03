import { colors } from '@omegup-school/ui-configs/colors';
import { typoStyles } from '@omegup-school/ui-configs/typography';

import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  containerSearch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '10px',
  },
  iconSearch: {
    width: '33px',
    height: '33px',
    backgroundColor: colors.pink[200],
    color: colors.pink[200],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  nameSearch: {
    margin: 0,
    ...typoStyles.paragraph_xSmall_regular,
  },
  descriptionSearch: {
    margin: 0,
    ...typoStyles.paragraph_xSmall_regular,
    color: colors.grey[500],
  },
});
