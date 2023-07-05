import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { createUseStyles } from 'react-jss';
import {shadowXSmall } from '@omegup-school/ui-atoms/effects/shadow';


export const useFilterStyles = createUseStyles({
  container: {
    width:"fit-content",
    padding: spacing.s5,
    flexDirection: "column",
    gap: spacing.s3,
    borderRadius: borders.r5,
    border: [borders.b2, "solid", colors.background.overlay],
    background: colors.background.default,
    boxShadow: shadowXSmall,
  },
  
  line: {
    margin:spacing.s3,
    border: [borders.b1,"solid"],
    borderColor:colors.background.overlay
  },
    
    
});
