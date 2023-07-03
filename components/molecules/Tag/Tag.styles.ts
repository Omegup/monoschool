import { typography } from "@omegup-school/ui-atoms/typography";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  tagTextContainer: ({ color }: { color: { primary: string, backgroundColor: string } }) => ({
    backgroundColor: color.backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    width: 'fit-content',
    height: '20px'
  }),

  tagText: ({ color }: { color: { primary: string, backgroundColor: string } }) => ({
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
    color: color.primary,
    paddingRight: '8px',
  }),

  tagIcon  : ({ color }: { color: { primary: string, backgroundColor: string } }) => ({
    backgroundColor: color.primary,
    width: '6px',
    height: '6px',
    margin: '6px 6px 6px 8px',
    borderRadius: '2px',
    display: 'flex',
    alignItems: 'baseline',
  }),

});