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

export const CardNumberDashboard = ({
  label,
  icon,
  onClick,
  number,
}: ControlledCardNumberDashboardProps) => {
  // eslint-disable-next-line quotes
  return (
    <Container gap={'s9'}>
      <ItemCardNumberDashboard
        onClick={onClick}
        variant={'headLine'}
        children={[
          icon,
          <Text variant={'paragraph_medium_medium'} text={label} />,
        ]}
        TextNumber={<Text variant={'display_large_bold'} text={number} />}
      />
    </Container>
  );
};
