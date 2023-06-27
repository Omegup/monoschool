import { ArrowCircleRight, Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './SideBar.styles';
import { ControlledSideBarProps } from './SideBar.types';
import { forwardRef } from 'react';
import { ButtonSideBar } from '../ButtonSideBar';
import { HeaderSideBar } from '../HeaderSideBar';


export const SideBar = forwardRef(
  (props: ControlledSideBarProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style,children,header,isOpened, onChange, value, onBlur } = props;
    const classes = useSelectStyles();
      
    return (
      <label
        tabIndex={-1}
        className={`${classes.label} ${classes[style]} ${classes[size]} `}
      >
        <ButtonSideBar  onChange={() => { } } onBlur={() => { } } isOpened={isOpened} size={size}/>
       <div className={classes.container}>
       <HeaderSideBar isOpened={true} onChange={header.onChange} onBlur={header.onBlur} style={'text'} size={'small'} title={'Omega School'} Logo={header.Logo} Search={header.Search} />
       </div>
      </label>
    );
  }
);
