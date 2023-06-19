import { colors } from '@omegup-school/ui-atoms/colors';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';

const useStyles = createUseStyles({
  filter: {
    ...styles.paragraph_medium_regular,
    color: colors.blue[500],
    cursor: 'pointer',
  },
});

export type Filter = { text: string };

export const Filter = ({ text }: Filter) => {
  const classes = useStyles();
  return <div>filter</div>;
};
