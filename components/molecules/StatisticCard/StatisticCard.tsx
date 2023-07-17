import { forwardRef } from 'react';
import { ControlledItemStatisticCardProps } from './StatisticCard.types';
import { Container, Text } from '@omegup-school/ui-atoms';

export const StatisticCard = forwardRef(
  (props: ControlledItemStatisticCardProps, ref: React.Ref<HTMLDivElement>) => {
    const {} = props;

    return (
      <Container children={undefined}></Container>
    );
  }
);
