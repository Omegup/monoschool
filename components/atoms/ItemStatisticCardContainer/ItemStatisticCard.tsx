import { forwardRef } from 'react';
import { ItemStatisticCardContainerProps } from './ItemStatisticCard.types';
import { useItemStatisticCardContainerStyles } from './ItemStatisticCardContainer.styles';
import { joinClassNames } from '@omegup-school/ui-configs/typography';

export const ItemStatisticCardContainer = forwardRef(
  (props: ItemStatisticCardContainerProps, ref: React.Ref<HTMLDivElement>) => {
    const { variant, fristChildren, secandChildren } = props;

    const classes = useItemStatisticCardContainerStyles();
    return (
      <div
        className={joinClassNames(classes.container, classes[variant])}
        ref={ref}
      >
        <span className={classes.childContainer}>{fristChildren}</span>
        <span className={classes.childContainer}>{secandChildren}</span>
      </div>
    );
  }
);
