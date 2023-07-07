import { colors } from "@omegup-school/ui-configs/colors";
import { typography } from "@omegup-school/ui-configs/typography/typography.cnst";
import { createUseStyles } from "react-jss";


export const useStyles = createUseStyles({
  cellLabel: {
    fontSize: typography.paragraph.overline.small.fontSize,
    fontWeight: typography.paragraph.overline.small.fontWeight,
    textTransform: 'uppercase',
    color: colors.headline[500],
    marginRight: 13,
  },
  // cellContainer: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   cursor: 'pointer',
  //   '&:hover': {
  //   }
  // },
  
  hoveredContainer: {
    '& $iconContainerTop': {
      transform: 'translate(-50%, -65%)',
      opacity: 1,
    },
    '& $iconContainerDown': {
      transform: 'translate(-50%, -45%)', 
      opacity: 1,
    },
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