import { Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './SubSideBar.styles';
import { ControlledSubSideBarProps } from './SubSideBar.types';
import { forwardRef } from 'react';

export const SubSideBar = forwardRef(
  (props: ControlledSubSideBarProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, label, Icon, onClick, value, onBlur } = props;
    const classes = useSelectStyles();

    return (
      <label
        tabIndex={-1}
        className={`${classes.label} ${classes[style]} ${classes[size]} `}
      >
        <div className={classes.container}
        onClick={(e)=>{onClick()}}
        {...{ ref, onBlur }}
        >
          <Icon fill={'black'} />
          <span className={classes.labelText}>{label}</span>
        </div>
      </label>
    );
  }
);
