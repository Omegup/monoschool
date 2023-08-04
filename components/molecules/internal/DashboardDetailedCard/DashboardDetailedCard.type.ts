import { IconContainerProps } from '@omegup-school/ui-atoms/IconContainer/IconContainer.type';

export interface DashboardDetailedCardProps {
  variant: 'danger' | 'info' | 'standart';
  title: string;
  subTitle: string;
  description: string;
  footerTitle: string;
  date: string;
  address: string;
  hoverIcon?: IconContainerProps['name'];
  hoverText?: string;
  hovrable?: boolean;
}
