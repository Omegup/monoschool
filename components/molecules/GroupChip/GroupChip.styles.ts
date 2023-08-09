import { colors } from '@omegup-school/ui-configs/colors';
import { shadowXSmall } from '@omegup-school/ui-configs/effects/shadow';
import { typoStyles } from "@omegup-school/ui-configs/typography";

import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  chipContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    backgroundColor: colors.blue[500],
    border: '1px solid' + colors.blue[500],
    borderRadius: '5px',
    cursor: 'default',
    boxShadow: shadowXSmall
  },

  avatar: {
    width: '18px',
    height: '18px',
    backgroundColor: colors.pink[200],
    color: colors.pink[200],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },

  cancelIcon: {
    width: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    marginLeft: '10px',
    cursor: 'default',
    '&:hover': {
      backgroundColor: colors.blue[500],
      color: colors.blue[500],
      '&>svg>path': {
        stroke: colors.light[500]
      }
    },
    '&>svg>path': {
      stroke: colors.dark.default,
    }
  },

  parent: {
    backgroundColor: colors.blue[500],
    padding: '5px',
    height: '100%',
    ...typoStyles.paragraph_xSmall_regular,
    color: colors.light[100],
    borderRadius: '5px'
  },

  labelContainer: {
    padding: '0 5px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.light[100],
    borderRadius: ' 0 5px 5px 0'
  },

  label: {
    padding: '5px',
    backgroundColor: colors.light[100],
    ...typoStyles.paragraph_xSmall_regular,
  },

  labelSeparator: {
    padding: '5px 7px 5px 5px',
    backgroundColor: colors.light[100],
    ...typoStyles.paragraph_xSmall_regular,
  },
})