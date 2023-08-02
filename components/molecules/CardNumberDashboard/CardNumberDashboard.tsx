import {
  Container,
  ItemCardNumberDashboard,
  Text,
} from '@omegup-school/ui-atoms';
import { forwardRef } from 'react';
import { ControlledCardNumberDashboardProps } from './CardNumberDashboard.types';

export const CardNumberDashboard = forwardRef(({
  items,
}: ControlledCardNumberDashboardProps, ref: React.Ref<HTMLDivElement>) => {
  return (
    <Container
      ref={ref}
      alignItems={'start'}
      gap={'s8'}
    >
      {items.map(({ onClick, variant, number, icon, label }, index) => (
        <ItemCardNumberDashboard
          {...{
            onClick,
            variant
          }}
          TextNumber={
            <Text variant={'display_large_bold'} text={number.toString()} />
          }
        >
          {icon}
          <Text variant={'paragraph_medium_medium'} text={label} />
        </ItemCardNumberDashboard>
      ))}
    </Container>
  );
});
