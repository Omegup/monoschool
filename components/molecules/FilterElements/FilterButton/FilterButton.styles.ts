import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';



export const useFilterStyles = createUseStyles({
  label: {
    borderRadius: borders.r5,
    border: 'none',
    outline: 'none',
    color: colors.grey[400],
    backgroundColor: colors.background.default,
    gap: spacing.s4,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: colors.light[300],
      color: colors.blue[500],
      '& $arrow': {
        fill: colors.blue[500],
      },
    },
    
    '& > $input:checked + $container': {
     backgroundColor:"red",
     
    },
  },
  input: { clip: 'rect(0 0 0 0)', position: 'absolute' },
  iconContainer: {
    width:widths.buttonFilter.default,
    height:widths.buttonFilter.default,
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    
  },icon:{
    width:widths.buttonFilter.icon,
    height:widths.buttonFilter.icon,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.s4,
    padding: '8px',
    justifyContent: 'space-between',
  },
  labelText: {
    textAlign: 'left',
    width: '100%',
    
  },
  square: {},
});
