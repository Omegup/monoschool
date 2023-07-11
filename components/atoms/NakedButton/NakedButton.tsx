import { forwardRef } from 'react';
import { ControlledNakedButtonProps } from './NakedButton.type';
import { useNakedInputStyles } from './NakedButton.style';
import { styles } from '../common/styles';

export const NakedButton = forwardRef(
  (props: ControlledNakedButtonProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      onClick,
      endIcon,
      startIcon,
      text,
      border,
      borderColor,
      disabled = false,
      bg,
      shadow,
      textVariant = 'paragraph_medium_semiBold',
    } = props;
    const classes = useNakedInputStyles({
      border,
      disabled,
      borderColor,
      bg,
      textVariant,
      shadow,
      ...styles,
    });
    return (
      <div ref={ref} className={`${classes.inputContainer} `} {...{ onClick }}>
        {startIcon}
        <button
          {...{ disabled }}
          className={`${classes[textVariant]} ${
            disabled ? classes.disabled : ''
          }`}
        >
          {text}
        </button>
        {endIcon}
      </div>
    );
  }
);
