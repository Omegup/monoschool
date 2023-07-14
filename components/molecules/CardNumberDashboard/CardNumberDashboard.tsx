import {
  Container,
  ItemCardNumberDashboard,
  Text,
} from '@omegup-school/ui-atoms';
import { ControlledCardNumberDashboardProps } from './CardNumberDashboard.types';
import { forwardRef } from 'react';

export const CardNumberDashboard = forwardRef(({
  items,
}: ControlledCardNumberDashboardProps,ref: React.Ref<HTMLDivElement>) => {
  const variant: ['blue', 'headLine', 'light'] = ['blue', 'headLine', 'light'];
  return (
    <Container
      ref={ref}
      alignItems={'start'}
      justifyContent={'space-between'}
      width={'640px'}
      gap={'s8'}
    >
      {items.map((item, index) => (
        <ItemCardNumberDashboard
          onClick={item.onClick}
          variant={variant[index]}
          TextNumber={
            <Text variant={'display_large_bold'} text={item.number} />
          }
        >
          {item.icon}
          <Text variant={'paragraph_medium_medium'} text={item.label} />
        </ItemCardNumberDashboard>
      ))}
    </Container>
  );
});
