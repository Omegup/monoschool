import { forwardRef } from 'react';
import { TaskItemProps } from './TaskItem.type';
import { useTaskItemStyles } from './TaskItem.style';
import { Circle, TickCircle } from '@omegup-school/ui-assets';

export const TaskIem = forwardRef(
  (props: TaskItemProps, ref: React.Ref<HTMLDivElement>) => {
    const { text, checked, ...styling } = props;
    const classes = useTaskItemStyles(styling);
    // const colors:{[k in 'checked'|'uncheked']:keyof typeof } = {checked:''};
    return (
      <div {...{ ref }} className={classes.taskContainer}>
        <div className={classes.iconContainer}>
          {checked ? <TickCircle /> : <Circle />}
        </div>
        <span>{text}</span>
      </div>
    );
  }
);
