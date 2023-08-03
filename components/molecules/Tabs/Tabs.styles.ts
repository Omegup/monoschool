import { colors } from '@omegup-school/ui-configs/colors';
import { borders } from '@omegup-school/ui-configs/sizes';
import { typoStyles } from '@omegup-school/ui-configs/typography';

import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  tabsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
    width: 'fit-content',
    cursor: 'pointer',

    '&>svg>path': {
      width: '20px',
      height: '20px',
    },

    '&:hover': {
      '&>tabLabel': {
        ...typoStyles.paragraph_medium_semiBold,
        color: colors.grey[500],
      },
    },
  },
  tabSelected: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px',
    width: 'fit-content',
    cursor: 'default',
    borderRadius: borders.r5,
    borderBottom: `5px solid ${colors.blue[500]}`,

    '&>svg>path': {
      width: '20px',
      height: '20px',
    },

    '&>$tabLabel': {
      ...typoStyles.paragraph_medium_semiBold,
      color: colors.dark.default,
    },
  },

  tabLabel: {
    ...typoStyles.paragraph_medium_semiBold,
    color: colors.grey[500],
    paddingLeft: '12px',
  },

  tabsActionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    cursor: 'pointer',

    '&>div>svg>path': {
      fill: colors.blue[500],
      stroke: colors.light[500],
    },
  },
});
