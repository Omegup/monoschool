import { useColumnStyles } from './Column.styles';

export const Column = ({ children }: { children: React.ReactNode }) => {
  const classes = useColumnStyles();
  return (
    <div className={classes.columnContainer}>
      {children}
    </div>
  )
}

