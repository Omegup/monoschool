import { Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './FilterSelect.styles';
import { SelectProps } from './FilterSelect.types';

export const FilterSelect = ({
  size,
  style,
  disabled,
  label,
  showImage,
  imageURL,
}: SelectProps) => {
  const classes = useSelectStyles(),
    disabledClass = classes[disabled ? 'disabled' : 'enabled'];
  return (
    <label
      tabIndex={-1}
      className={`${classes.label} ${classes[style]} ${classes[size]} ${disabledClass}`}
    >
      <input type="checkbox" className={classes.input} />
      <div className={classes.container}>
        <span className={classes.checkbox}>
          <span className={classes.square}>
            <Square width="100%" />
          </span>
          <span className={classes.tick}>
            <Tick width="100%" />
          </span>
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
};
