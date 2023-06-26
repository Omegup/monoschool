import { Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './SideBar.styles';
import { ControlledSideBarProps } from './SideBar.types';
import { forwardRef } from 'react';


export const SideBar = forwardRef(
  (props: ControlledSideBarProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, title,list, onChange, value, onBlur } = props;
    const classes = useSelectStyles();
      
    return (
      <label
        tabIndex={-1}
        className={`${classes.label} ${classes[style]} ${classes[size]} `}
      >
       
      </label>
    );
  }
);
