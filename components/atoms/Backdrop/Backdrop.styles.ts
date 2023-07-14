import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  backdrop: {
    position: "fixed",
    background: "rgba(0,0,0,0.5)",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
})
