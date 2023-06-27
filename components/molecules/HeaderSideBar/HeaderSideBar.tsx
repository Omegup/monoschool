import { Logo } from '@omegup-school/ui-assets';
import { useSelectStyles } from './HeaderSideBar.styles';
import { ControlledHeaderSideBarProps } from './HeaderSideBar.types';
import { forwardRef } from 'react';


export const HeaderSideBar = forwardRef(
  (props: ControlledHeaderSideBarProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, title,Logo,Search,isOpened, onChange, onBlur } = props;
    const classes = useSelectStyles();
      console.log(isOpened)
    return (
      <label
        tabIndex={-1}
        className={`${classes.label} ${classes[style]} ${classes[size]} `}
      >
       <div className={classes.container}>
        <div className={classes.logo}>
         {Logo} 
         {isOpened &&<span className={classes.labelText} >{title}</span>}
         </div>
         {Search}
       </div>
      </label>
    );
  }
);
