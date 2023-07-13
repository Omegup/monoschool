import { forwardRef } from 'react';
import { useButtonStyles } from './ButtonSideBar.styles';
import { ControlledButtonSideBarProps } from './ButtonSideBar.types';



export const ButtonSideBar = forwardRef((props: ControlledButtonSideBarProps, ref: React.Ref<HTMLDivElement>)=> {
  const classes = useButtonStyles();
  const { isCollopsed, onCollopsed, iconButtonCollopsed,iconButtonNotCollopsed } = props;
  return (
    <div
      className={`${classes.button} `}
      onClick={onCollopsed}
      {...ref}
    >
      {!isCollopsed ? (
        <span className={classes.icon}>{iconButtonNotCollopsed}</span>
      ) : (
        <span className={classes.icon}>{iconButtonCollopsed}</span>
      )}
    </div>
  );
});
