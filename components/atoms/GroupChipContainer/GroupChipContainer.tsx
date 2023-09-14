import { useStyles } from './GroupChipContainer.styles';
import { ChipsContainerProps } from './GroupChipContainer.types';

export const GroupChipContainer = ({ children }: ChipsContainerProps) => {
  const classes = useStyles();
  return (
    <div className={classes.chipContainer}>
      {children}
    </div>
  );
};
