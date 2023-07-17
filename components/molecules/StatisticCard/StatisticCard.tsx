import { Container } from '@omegup-school/ui-atoms';
import { forwardRef } from 'react';
import { ItemStatisticCard, NowadayStatistic } from '..';
import { ControlledStatisticCardProps } from './StatisticCard.types';

export const StatisticCard = forwardRef(
  (props: ControlledStatisticCardProps, ref: React.Ref<HTMLDivElement>) => {
    const { data } = props;

    return (
      <Container
        {...ref}
        alignItems={'start'}
        justifyContent={'space-between'}
        width={'621px'}
      >
        <Container
          {...ref}
          width={'100%'}
          direction={'column'}
          justifyContent={'space-between'}
          alignItems={'start'}
        >
          {data.map((item) => (
            <ItemStatisticCard
              {...item}
              variant={'blue'}
            />
          ))}
        </Container>
        <NowadayStatistic 
        label={''} 
        items={[]}          
        />
      </Container>
    );
  }
);
