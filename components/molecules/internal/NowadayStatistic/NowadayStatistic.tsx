import {
  Container,
  Text,
  NowadayStatisticContainer,
} from '@omegup-school/ui-atoms';
import { forwardRef } from 'react';
import { NowadayStatisticProps } from './NowadayStatistic.types';

export const NowadayStatistic = forwardRef(
  (props: NowadayStatisticProps, ref: React.Ref<HTMLDivElement>) => {
    const { label, items } = props;
    const bg: ['blue_300', 'blue_500'] = ['blue_300', 'blue_500'];
    return (
      <NowadayStatisticContainer
        ref={ref}
        label={
          <Text
            variant={'paragraph_medium_medium'}
            color={'blue_700'}
            text={label}
          />
        }
      >
        {items.map((item) => (
         <>
            {item.icon}
            <Text
              variant={'paragraph_medium_medium'}
              color={'blue_700'}
              text={item.label}
            />
            <Text
              variant={'paragraph_medium_medium'}
              color={'dark_default'}
              text={item.amount}
            />
       </>
        ))}
      </NowadayStatisticContainer>
    );
  }
);
