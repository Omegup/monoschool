import { colors } from '@omegup-school/ui-atoms/colors';

import {spacing, widths } from '@omegup-school/ui-atoms/sizes';
import { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
  button: {
    width: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.s5,
    borderRadius: '50%',
    background: colors.background.default,
    /* Drop Shadow/Small */
    boxShadow:
      '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)',
  },
  icon: {
    width: widths.sideBar.icon,
    height: widths.sideBar.icon,
    display: 'flex',
    alignItems: 'center',
  },
});


export interface ControlledButtonSideBarProps  {
  isCollopsed?: boolean;
  onChange: (isCollopsed: boolean) => void;
  onBlur: () => void;
  firstIcon: JSX.Element;
  secandIcon: JSX.Element;
}

export const ButtonSideBar = forwardRef((props: ControlledButtonSideBarProps, ref: React.Ref<HTMLDivElement>)=> {
  const classes = useStyles();
  const { isCollopsed, onChange, onBlur, secandIcon,firstIcon } = props;
  return (
    <div
      className={`${classes.button} `}
      onClick={() => {
        onChange;
      }}
      {...{ref,onBlur}}
    >
      {!isCollopsed ? (
        <span className={classes.icon}>{firstIcon}</span>
      ) : (
        <span className={classes.icon}>{secandIcon}</span>
      )}
    </div>
  );
})
