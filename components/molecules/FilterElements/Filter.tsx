import { colors } from '@omegup-school/ui-atoms/colors';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { useState } from 'react';

const useStyles = createUseStyles({
  filter: {
    ...styles.paragraph_medium_regular,
    color: colors.blue[500],
    cursor: 'pointer',
  },
});

export type Filter = {label:string };
interface CheckboxProps {
  label: string;
}
export const Filter = ({ label }: Filter) => {
  const classes = useStyles();
  
  return <div>  
     <label htmlFor={label}>{label}</label>
  </div>;
};
