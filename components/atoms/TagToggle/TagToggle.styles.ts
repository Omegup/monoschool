import { spacing } from "@omegup-school/ui-configs/sizes";
import { typography } from "@omegup-school/ui-configs/typography/typography.cnst";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  tagTextContainer: ({ color }: { color: { primary: string, backgroundColor: string } }) => ({
    backgroundColor: color.backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: spacing.s2,
    width: 'fit-content',
    height: spacing.s9
  }),

  tagText: ({ color }: { color: { primary: string, backgroundColor: string } }) => ({
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
    color: color.primary,
    paddingInlineEnd: spacing.s4,
  }),

  tagIcon  : ({ color }: { color: { primary: string, backgroundColor: string } }) => ({
    backgroundColor: color.primary,
    width: spacing.s3,
    height: spacing.s3,
    margin: `${spacing.s3}px ${spacing.s3}px ${spacing.s3}px ${spacing.s4}px`,
    borderRadius: spacing.s1,
    display: 'flex',
    alignItems: 'baseline',
  }),

});