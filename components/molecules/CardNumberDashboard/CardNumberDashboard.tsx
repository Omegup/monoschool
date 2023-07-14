/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Container,
  ItemCardNumberDashboard,
  Text,
} from '@omegup-school/ui-atoms';
import { ControlledCardNumberDashboardProps } from './CardNumberDashboard.types';
import { ItemCardNumberDashboardProps } from '@omegup-school/ui-atoms/ItemCardNumberDashboard/ItemCardNumberDashboard.types';

export const CardNumberDashboard = ({
  children,
}: ControlledCardNumberDashboardProps) => {
  // eslint-disable-next-line quotes
  const variant: ['blue', 'headLine', 'light'] = ['blue', 'headLine', 'light'];
  return (
    <Container
      alignItems={'start'}
      justifyContent={'space-between'}
      width={'640px'}
    >
      {children.map((child, index) => (
        <ItemCardNumberDashboard
          onClick={child.onClick}
          variant={variant[index]}
          TextNumber={
            <Text variant={'display_large_bold'} text={child.number} />
          }
        >
          {child.icon}
          <Text variant={'paragraph_medium_medium'} text={child.label} />
        </ItemCardNumberDashboard>
      ))}
    </Container>
  );
};
