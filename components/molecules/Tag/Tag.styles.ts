import { typography } from "@omegup-school/ui-atoms/typography";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  tagTextContainer: ({ color }: { color: { primary: string, backgroundColor: string } }) => ({
    backgroundColor: color.backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5rem',
    width: 'fit-content',
    padding: '5px 10px',
    height: '20px'

  }),

  tagText: ({ color }: { color: { primary: string, backgroundColor: string } }) => ({
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
    color: color.primary,
  }),

  tagIcon  : ({ color }: { color: { primary: string, backgroundColor: string } }) => ({
    backgroundColor: color.primary,
    width: '6px',
    height: '6px',
    margin: '5px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'baseline',
  }),

});