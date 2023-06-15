import { colors } from '@omegup-school/ui-atoms/colors';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';

const useStyles = createUseStyles({
  header: {
    ...styles.heading_h5_bold,
    color: colors.dark.default,
  },
  subHeader: {
    ...styles.heading_h4_bold,
    color: colors.dark.default,
  },
  title: {
    color: colors.blue[500],
  },
});

export const SignInHeader = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.header}>Bienvenu</h1>
      <h2 className={classes.subHeader}>
        dans <span className={classes.title}>Omega School</span>
      </h2>
    </div>
  );
};
