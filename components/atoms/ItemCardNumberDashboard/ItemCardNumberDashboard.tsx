/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { joinClassNames } from '@omegup-school/ui-configs/typography';
import { forwardRef } from 'react';
import { useCardNumberDashboardStyles } from './ItemCardNumberDashboard.styles';
import { ControlledItemCardNumberDashboardProps } from './ItemCardNumberDashboard.types';

export const ItemCardNumberDashboard = forwardRef(({
  variant,
  TextNumber,
  children,
  onClick,
}: ControlledItemCardNumberDashboardProps,ref:React.Ref<HTMLDivElement>) => {

  const classes = useCardNumberDashboardStyles();

  return(
    <div className={joinClassNames(
      classes.container,classes[variant]
    )}
    {...{ref}}
    onClick={onClick}
    >
    {TextNumber}
    <div className={classes.childrenContainer}>
      {children}
    </div>
    <span className={classes.bottomLine}></span>
  </div>
  );
});