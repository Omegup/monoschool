import { MouseEvent } from 'react';

export type CardNumberDashboardVariant = 'blue' | 'headLine' | 'light';

export interface CardNumberDashboardProps {
  variant: CardNumberDashboardVariant;
  label: string;
  icon: JSX.Element;
  number: number;
  onClick: (event: MouseEvent) => void;
}
export interface ControlledCardNumberDashboardProps {
  items: [
    CardNumberDashboardProps,
    CardNumberDashboardProps,
    CardNumberDashboardProps
  ];
}
