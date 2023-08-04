import { useStyles } from './ChipsLabel.styles';
import { ChipsLabelProps } from './ChipsLabel.types';

export const ChipsLabel = ({ label }: ChipsLabelProps) => {
  const classes = useStyles();
  return (
    <span className={classes.label}>{label}</span>
  );
};