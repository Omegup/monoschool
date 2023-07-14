import { forwardRef } from 'react';
import { useInfinitScrollContainerStyle } from './InfinitScrollContainer.style';
import { InfinitScrollContainerProps } from './InfinitScrollContainer.type';

export const InfinitScrollContainer = forwardRef(
  (props: InfinitScrollContainerProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      children,
      numberOfItemToLoad,
      itemsNumber,
      onScrollEndReach,
      ...styling
    } = props;
    const classes = useInfinitScrollContainerStyle({ ...styling });

    const loadOnScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = ref?.current;
      if (scrollTop + clientHeight > scrollHeight - 50) {
        onScrollEndReach(
          children.length === itemsNumber
            ? itemsNumber + numberOfItemToLoad
            : itemsNumber
        );
      }
    };
    return (
      <div ref={ref} className={classes.container} onScroll={loadOnScroll}>
        {children}
      </div>
    );
  }
);
