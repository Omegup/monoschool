import { Vector } from '@omegup-school/ui-assets';
import { useStyles } from './GroupChipContent.styles';
import { GroupChipContentProps } from './GroupChipContent.types';

export const GroupChipContent = ({ name, avatar, isLastIndex, onCancel }: GroupChipContentProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.nameContainer}>
        {avatar}
        <span className={classes.label}>{name}</span>
      </div>
      {
        isLastIndex
          ?
          <div className={classes.cancelIcon} onClick={() => onCancel()}>
            <Vector width='12' height='12' />
          </div>
          :
          <span className={classes.labelSeparator}>/</span>
      }
    </div>
  );
};
