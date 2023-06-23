import { colors } from "@omegup-school/ui-atoms/colors";
import { typography } from "@omegup-school/ui-atoms/typography";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  cellContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    '&:hover': {
      '& $iconContainerTop': {
        transform: 'translate(-50%, -65%)',
        opacity: 1,

      },
      '& $iconContainerDown': {
        transform: 'translate(-50%, -45%)',
        opacity: 1,
      },
    }
  },
  cellLabel: {
    fontSize: typography.paragraph.overline.small.fontSize,
    fontWeight: typography.paragraph.overline.small.fontWeight,
    textTransform: 'uppercase',
    color: colors.headline[500],
    marginRight: 13,
  },
  dispalyIcons: {
    '$cellSortIcon>&': {
      opacity: 1,
    },
    '& $iconContainerTop': {
      transform: 'translate(-50%, -65%)',
      opacity: 1,

    },
    '& $iconContainerDown': {
      transform: 'translate(-50%, -45%)',
      opacity: 1,
    },
  },
  cellSortIcon: {
    position: 'relative',
  },
  iconContainerTop: {
    position: 'absolute',
    transition: 'transform 0.3s ease',
    opacity: 0,
    transform: 'translate(-50%, -75%)',
    pointerEvents: 'auto',
    transformOrigin: 'center',
  },
  iconContainerDown: {
    position: 'absolute',
    transition: 'transform 0.3s ease',
    opacity: 0,
    transform: 'translate(-50%, -35%)',
    pointerEvents: 'auto',
    transformOrigin: 'center',
  },
});