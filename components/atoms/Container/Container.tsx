import { forwardRef } from 'react';
import { ControlledContainerProps } from './Container.types';
import { useContainerStyles } from './Container.styles';

export const Container = forwardRef(
  (props: ControlledContainerProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, ...styling } = props;
    const classes = useContainerStyles(styling);

    return (
      <div className={`${classes.container}`} ref={ref}>
        {children}
      </div>
    );
  }
);
