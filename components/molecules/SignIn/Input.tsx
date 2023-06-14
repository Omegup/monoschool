import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    border: '1px solid #333',
    borderRadius: '5px',
  },
  cc: {
    padding: '5px',
  },
  lb: {
    display: 'flex',
    alignItems: 'center',
    paddingInline: '5px',
  },
  label: {
    position: 'absolute',
    backgroundColor: '#fff',
    paddingInline: 5,
    fontSize: '12px',
    lineHeight: '18px',
    color: '#333',
    borderStartStartRadius: '8px',
    borderStartEndRadius: '8px',
  },
  input: {
    border: 'none',
    outline: 'none',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
  },
});

const OutlinedInput = ({ label }: { label: string }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.lb}>
        <label className={classes.label}>{label}</label>
      </div>{' '}
      <div className={classes.cc}>
      <input className={classes.input} />

      </div>
    </div>
  );
};

export default OutlinedInput;
