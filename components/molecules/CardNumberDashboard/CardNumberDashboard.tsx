import {
  Container,
  ItemCardNumberDashboard,
  Text,
} from '@omegup-school/ui-atoms';
import { ControlledCardNumberDashboardProps } from './CardNumberDashboard.types';

export const CardNumberDashboard = ({
  items,
}: ControlledCardNumberDashboardProps) => {
  const variant: ['blue', 'headLine', 'light'] = ['blue', 'headLine', 'light'];
  return (
    <Container
      alignItems={'start'}
      justifyContent={'space-between'}
      width={'640px'}
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
};
