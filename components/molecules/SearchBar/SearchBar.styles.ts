import { colors } from '@omegup-school/ui-atoms/colors';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { shadowXSmall } from '@omegup-school/ui-atoms/effects/shadow';



export const useSearchBarStyles = createUseStyles({
  navBar: {
    '& $container ': {
      padding: spacing.s4,
      gap: spacing.s4,
      borderRadius: borders.r5,
      border: [borders.b2, 'solid', colors.background.overlay],
    },
  },
  sideBar: {
    '& $container ': {
      padding: spacing.s4,
      gap: spacing.s8,
      borderRadius: borders.r5,
      border: [borders.b2, 'solid', colors.grey[500]],
      '& $firstIcon , $secondIcon': {
        color: colors.grey[500],
      },
    },
    '&:hover':{
      '& $container ': {
        backgroundColor:colors.light[500],
        border: [borders.b2, 'solid', colors.blue[500]],
        '& $input': {
          backgroundColor: colors.light[500],
          '&::placeholder': {
            color: colors.blue[500],
          }
        },
        '& $firstIcon , $secondIcon': {
          color: colors.blue[500],
        },
      },
    },
    



  },
  filterSearch: {
    '& $container ': {
      padding: spacing.s4,
      gap: spacing.s8,
      borderRadius: borders.r5,
      border: [borders.b2, 'solid', colors.background.overlay],
    },
  },
  input: {
    border: colors.background.overlay,
    outline: colors.background.overlay,
    padding: '0',
    margin: '0',
    width: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    background: colors.background.default,
    boxShadow: shadowXSmall,
  },
  firstIcon: {
    width:widths.searchBar.default,
    height:widths.searchBar.default,
  },
  secondIcon: {
    width:widths.searchBar.default,
    height:widths.searchBar.default,
  },
  labelText: {
    ...styles.paragraph_small_regular,
    fontcolor: colors.grey[400],
  },
});
