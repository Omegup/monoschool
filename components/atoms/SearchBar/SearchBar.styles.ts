import { colors } from '@omegup-school/ui-configs/colors';
import { widths } from '@omegup-school/ui-configs/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { shadowXSmall } from '@omegup-school/ui-configs/effects/shadow';

export const useSearchBarStyles = createUseStyles({
  navBar: {
    '& $container ': {
      gap: spacing.s7,
      border: [borders.b2, 'solid', colors.grey[500]],
      '& $input': {
        color: colors.grey[500],
        ...styles.paragraph_medium_regular,
      },
      '& $icon': {
        color: colors.grey[500],
        width: widths.searchBar.medium,
        height:widths.searchBar.medium,
      },
    },
  },
  sideBar: {
    '& $container': {
      gap: spacing.s7,
      border: [borders.b2, 'solid', colors.grey[500]],
      '& $input': {
        color: colors.grey[500],
        ...styles.paragraph_medium_regular,
      },
      '& $icon': {
        color: colors.grey[500],
        width: widths.searchBar.medium,
        height:widths.searchBar.medium,
      },
      '&:has($input:focus)': {
        backgroundColor: colors.light[200],
        border: [borders.b2, 'solid', colors.blue[500]],
        '& $input': {
          backgroundColor: colors.light[200],
          color: colors.blue[500],
          '&::placeholder': {
            color: colors.blue[500],
          },
        },
        '& $icon': {
          color: colors.blue[500],
        },
      },
    },
    '&:hover': {
      '& $container ': {
        backgroundColor: colors.light[500],
        border: [borders.b2, 'solid', colors.blue[500]],
        '& $input': {
          color: colors.blue[500],
          backgroundColor: colors.light[500],
          '&::placeholder': {
            color: colors.blue[500],
          },
        },
        '& $icon': {
          color: colors.blue[500],
        },
      },
    },
  },
  filterSearch: {
    '& $container ': {
      gap: spacing.s2,

      border: [borders.b2, 'solid', colors.background.overlay],
      '& $input': {
        color: colors.grey[400],
        ...styles.paragraph_xSmall_regular,
        '&::placeholder': {
          color: colors.grey[400],
        },
      },

      '& $icon': {
        color: colors.grey[400],
        width: widths.searchBar.small,
        height:widths.searchBar.small,
      },
     
    },
  },
  input: {
    border: colors.background.overlay,
    outline: colors.background.overlay,
    width: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    background: colors.background.default,
    boxShadow: shadowXSmall,
    padding: spacing.s4,
    borderRadius: borders.r5,
  },
  icon: {
    display: 'flex',
    alignItems:'center'
  },
 
});
