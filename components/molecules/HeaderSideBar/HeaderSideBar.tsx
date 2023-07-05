import { Logo } from '@omegup-school/ui-assets';
import { useSelectStyles } from './HeaderSideBar.styles';
import { ControlledHeaderSideBarProps } from './HeaderSideBar.types';
import { forwardRef } from 'react';


export const HeaderSideBar = forwardRef(
  (props: ControlledHeaderSideBarProps, ref: React.Ref<HTMLDivElement>) => {
    const { title,Logo,Search,SearchIcon,isOpened,onBlur} = props;
    const classes = useSelectStyles();
    return (
       <div  {...ref} className={classes.container}>
        <div className={classes.logo}>
        <span className={classes.logoIcon} > {Logo} </span>
         {isOpened && <span className={classes.labelText} >{title}</span>}
         </div>
         {isOpened ?  Search :<span className={classes.SearchIcon}>{SearchIcon}</span>}
       </div>
    );
  }
);
