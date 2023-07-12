import { colors } from "@omegup-school/ui-configs/colors";
import { borders, spacing } from "@omegup-school/ui-configs/sizes";
import { typography } from "@omegup-school/ui-configs/typography/typography.cnst";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  tabSelected: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBlock: spacing.s5,
    width: 'fit-content',
    cursor: 'default',
    borderRadius: borders.r3,
    borderBottom: `5px solid ${colors.blue[500]}`,

    '&>svg>path': {
      width: spacing.s9,
      height: spacing.s9,
    },

    '&>$tabLabel': {
      fontSize: typography.paragraph.medium.semiBold.fontSize,
      fontWeight: typography.paragraph.medium.semiBold.fontWeight,
      color: colors.dark.default,
      paddingInlineStart: spacing.s3
    }
  },
  tabLabel: {
    fontSize: typography.paragraph.medium.regular.fontSize,
    fontWeight: typography.paragraph.medium.regular.fontWeight,
    color: colors.grey[500],
    paddingInlineStart: spacing.s5
  },
  tab: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBlock: spacing.s5,
    width: 'fit-content',
    cursor: 'pointer',

    '&>svg>path': {
      width: spacing.s9,
      height: spacing.s9,
    },

    '&:hover': {
      '&>svg>path': {
        stroke: colors.dark.default,
      },
      '&>$tabLabel': {
        color: colors.dark.default,
      }
    }
  },
});