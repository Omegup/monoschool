import {
  ItemStatisticCardContainer,
  Text
} from '@omegup-school/ui-atoms';
import { forwardRef } from 'react';
import { ControlledItemStatisticCardProps } from './ItemStatisticCard.types';

export const ItemStatisticCard = forwardRef(
  (props: ControlledItemStatisticCardProps, ref: React.Ref<HTMLDivElement>) => {
    const { icon, label, variant, amount, percentage } = props;

    return (
      <ItemStatisticCardContainer
        ref={ref}
        variant={variant}
        fristChildren={
          <>
            {' '}
            <button>to do</button>
            <Text variant={'paragraph_medium_semiBold'} text={label} />
          </>
        }
        secandChildren={
          <>
            {' '}
            <Text
              variant={'paragraph_medium_semiBold'}
              text={amount + ' DT'}
            />
            <button>{`+ ${percentage}%`}</button>
          </>
        }
      ></ItemStatisticCardContainer>
    );
  }
);
