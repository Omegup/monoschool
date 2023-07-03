import { Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './Card.styles';
import { ControlledCardProps } from './Card.types';
import { forwardRef } from 'react';


export const Card = forwardRef(
  (props: ControlledCardProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, label, onChange, value, onBlur } = props;
    const classes = useSelectStyles();
     
    return (
      <label
        tabIndex={-1}
        className={`${classes.label} ${classes[style]} ${classes[size]} `} >

        <div className={classes.container}>

        
     
        </div>
      </label>
    );
  }
);
