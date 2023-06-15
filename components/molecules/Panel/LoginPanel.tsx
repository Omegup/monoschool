import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    minHeight: '100vh',
    display: 'flex',
    '&>div': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
  },
});

export const LoginPanel = ({
  children,
}: {
  children: readonly [React.ReactNode, React.ReactNode];
}) => {
  const [left, right] = children;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};
