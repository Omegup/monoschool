import { colors } from '@omegup-school/ui-configs/colors';
import {
  shadowMedium,
  shadowXSmall,
} from '@omegup-school/ui-configs/effects/shadow';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';

const useStyles = createUseStyles({
  button: {
    backgroundColor: colors.light[500],
    borderRadius: borders.r5,
    border: 'none',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: shadowXSmall,
    color: colors.blue[500],
    cursor: 'pointer',
    '&:active, &:focus, &:hover': {
      backgroundColor: colors.blue[500],
      boxShadow: shadowMedium,
      color: colors.background.default,
    },
    '&:active:hover, &:focus:hover': {
      color: colors.background.default,
      backgroundColor: colors.blue[600],      
    },
  },
  label: {
    ...styles.paragraph_medium_regular,
    padding: spacing.s5,
  },
});

export type ButtonProps = {
  label: string;
};

export const Button = ({ label }: ButtonProps) => {
  const classes = useStyles();
  return (
    <button className={classes.button}>
      <span className={classes.label}>{label}</span>
    </button>

  );
};
