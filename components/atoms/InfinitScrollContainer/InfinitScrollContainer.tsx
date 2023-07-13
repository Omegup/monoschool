import { forwardRef } from 'react';
import { useInfinitScrollContainerStyle } from './InfinitScrollContainer.style';
import { InfinitScrollContainerProps } from './InfinitScrollContainer.type';

export const InfinitScrollContainer = forwardRef(
  (props: InfinitScrollContainerProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, ...styling } = props;
    const classes = useInfinitScrollContainerStyle({ ...styling });

    return (
      <div ref={ref} className={classes.container}>
        {children}
      </div>
    );
  }
);
