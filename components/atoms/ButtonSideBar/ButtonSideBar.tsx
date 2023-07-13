import { forwardRef } from 'react';
import { useButtonStyles } from './Container.styles';
import { ControlledButtonSideBarProps } from './Container.types';



export const ButtonSideBar = forwardRef((props: ControlledButtonSideBarProps, ref: React.Ref<HTMLDivElement>)=> {
  const classes = useButtonStyles();
  const { isCollopsed, onClick, RightCollopsedIcon,LeftCollopsedIcon } = props;
  return (
    <div
      className={`${classes.button} `}
      onClick={() => {
        onClick;
      }}
      {...ref}
    >
      {!isCollopsed ? (
        <span className={classes.icon}>{LeftCollopsedIcon}</span>
      ) : (
        <span className={classes.icon}>{RightCollopsedIcon}</span>
      )}
    </div>
  );
})
