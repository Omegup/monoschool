import { createUseStyles } from "react-jss";


export const useStyles = createUseStyles(({ containerStateSelector }: { containerStateSelector: string }) => ({

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
    [`.${containerStateSelector}:hover & $iconContainerTop`]: {
      transform: 'translate(-50%, -65%)',
      opacity: 1,
    },
    [`.${containerStateSelector}:hover & $iconContainerDown`]: {
      transform: 'translate(-50%, -45%)',
      opacity: 1,
    },
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
}));