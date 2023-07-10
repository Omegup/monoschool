import { forwardRef } from 'react';
import { ControlledFilterButtonProps as ControlledFilterButtonProps } from './FilterButton.types';
import { useContainerStyles } from './FilterButton.styles';

export const FilterButton = forwardRef(
  (props: ControlledFilterButtonProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, onClick, active } = props;
    const classes = useContainerStyles();
    return (
      <div
        className={`${classes.container} ${active ? classes.selected : ''}`}
        ref={ref}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);
