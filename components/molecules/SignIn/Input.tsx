import { colors } from '@omegup-school/ui-atoms/colors';
import { spacing, borders } from '@omegup-school/ui-atoms/sizes';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';

const useStyles = createUseStyles({
  root: {
    border: [borders.b2, 'solid', colors.grey[300]],
    borderRadius: borders.r5,
  },
  cc: {
    paddingInline: spacing.s8,
    paddingBlock: spacing.s6,
  },
  lb: {
    display: 'flex',
    alignItems: 'center',
    paddingInline: spacing.s8,
  },
  label: {
    ...styles.paragraph_xSmall_semiBold,
    color: colors.grey[400],
    position: 'absolute',
    backgroundColor: colors.background.default,
    paddingInline: spacing.s2,
    borderStartStartRadius: borders.r5,
    borderStartEndRadius: borders.r5,
  },
  input: {
    ...styles.paragraph_medium_semiBold,
    '&::placeholder': {
      color: colors.grey[400],
    },
    color: colors.dark.default,
    border: 'none',
    outline: 'none',
    width: '100%',
  },
});

const OutlinedInput = ({
  label,
  placeholder,
  type
}: {
  placeholder?: string;
  label: string;
  type?: 'password',
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.lb}>
        <label className={classes.label}>{label}</label>
      </div>{' '}
      <div className={classes.cc}>
        <input type={type} placeholder={placeholder} className={classes.input} />
      </div>
    </div>
  );
};

export default OutlinedInput;
