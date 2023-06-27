import { ArrowCircleRight, Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './SideBar.styles';
import { ControlledSideBarProps } from './SideBar.types';
import { forwardRef } from 'react';
import { ButtonSideBar } from '../ButtonSideBar';
import { HeaderSideBar } from '../HeaderSideBar';


export const SideBar = forwardRef(
  (props: ControlledSideBarProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style,children,header,isOpened, onChange,button, value, onBlur } = props;
    const classes = useSelectStyles();
      
    return (
      <label
        tabIndex={-1}
        className={`${classes.label} ${classes[style]} ${classes[size]} `}
      >
     
       <div className={classes.container}>
       <div className={classes.sideBarButton} > <ButtonSideBar  onChange={button.onChange} onBlur={button.onBlur} isOpened={isOpened} size={size}/></div>
       <HeaderSideBar isOpened={isOpened} onChange={header.onChange} onBlur={header.onBlur} style={style} size={size} title={header.title} Logo={header.Logo} Search={header.Search} />
       </div>
      </label>
    );
  }
);
