import { Square, Tick } from '@omegup-school/ui-assets';
import { useFilterCheckBoxStyles } from './FilterCheckBox.styles';
import { ControlledFilterCheckBoxProps } from './FilterCheckBox.types';
import { forwardRef } from 'react';

export const FilterCheckBox =  forwardRef(
  (props: ControlledFilterCheckBoxProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, label,disabled,imageURL,checkbox,showImage, onChange, value, onBlur } = props;
  const classes = useFilterCheckBoxStyles(),
    disabledClass = classes[disabled ? 'disabled' : 'enabled'];
  return (
    <label
      tabIndex={-1}
      className={`${classes.label} ${classes[size]} ${disabledClass}`}
    >
      <input type="checkbox" className={classes.input} />
      <div className={classes.container}>
        <span className={classes.checkbox}>
          {checkbox}
        </span>
        {showImage && 
              
              <svg className={classes.image}>
                <image
                  href={imageURL}
                  width={"100%"}
                  height={"100%"}
                />
              </svg>
           }
        <span className={classes.labelText}>{label}</span>
      </div>
    </label>
  );
})
