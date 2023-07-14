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
  children,
}: ControlledCardNumberDashboardProps) => {
  
  const variant=["blue","headLine","light"];
  return (
    <Container
      alignItems={'start'}
      justifyContent={'space-between'}
      width={'640px'}
    >
      {children.map((child,index) => (
        <ItemCardNumberDashboard
          onClick={child.onClick}
          variant={variant[index]}
          children={[
            child.icon,
            <Text variant={'paragraph_medium_medium'} text={child.label} />,
          ]}
          TextNumber={<Text variant={'display_large_bold'} text={child.number} />}
        />
      ))}

      <ItemCardNumberDashboard
        onClick={onClick}
        variant={'headLine'}
        children={[
          icon,
          <Text variant={'paragraph_medium_medium'} text={label} />,
        ]}
        TextNumber={<Text variant={'display_large_bold'} text={number} />}
      />
      <ItemCardNumberDashboard
        onClick={onClick}
        variant={'light'}
        children={[
          icon,
          <Text variant={'paragraph_medium_medium'} text={label} />,
        ]}
        TextNumber={<Text variant={'display_large_bold'} text={number} />}
      />
    </Container>
  );
};
