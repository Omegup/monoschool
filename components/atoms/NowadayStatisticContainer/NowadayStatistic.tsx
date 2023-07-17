import { Children, forwardRef } from 'react';
import { NowadayStatisticContainerProps } from './NowadayStatistic.types';
import { useNowadayStatisticContainerStyles } from './ItemStatisticCardContainer.styles';

export const NowadayStatisticContainer = forwardRef(
  (props: NowadayStatisticContainerProps, ref: React.Ref<HTMLDivElement>) => {
    const { label, children } = props;
    const classes = useNowadayStatisticContainerStyles();
    return (
      <div className={classes.container} ref={ref}>
        {label}
        <span className={classes.childContainer}>{children}</span>
      </div>
    );
  }
);
