import { colors } from '@omegup-school/ui-configs/colors';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';

const useStyles = createUseStyles({
  link: {
    ...styles.paragraph_medium_regular,
    color: colors.blue[500],
    cursor: 'pointer',
  },
});

export type LinkProps = { text: string };

export const Link = ({ text }: LinkProps) => {
  const classes = useStyles();
  return <a className={classes.link}>{text}</a>;
};
