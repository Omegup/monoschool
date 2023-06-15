import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export const SpaceBetween = ({
  children,
}: {
  children: [React.ReactNode, React.ReactNode];
}) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};
