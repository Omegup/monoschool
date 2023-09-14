import { useStyles } from './ChipsLabel.styles';
import { GroupChipLabelProps } from './ChipsLabel.types';

export const GroupChipLabel = ({ label }: GroupChipLabelProps) => {
  const classes = useStyles();
  return (
    <span className={classes.label}>{label}</span>
  );
};