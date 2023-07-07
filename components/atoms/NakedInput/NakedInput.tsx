import { forwardRef } from 'react';
import { ControlleNakedInputProps } from './NakedInput.type';
import { useNakedInputStyles } from './NakedInput.style';
import { styles } from '../common/styles';

export const NakedInput = forwardRef(
  (props: ControlleNakedInputProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      onChange,
      value,
      border,
      borderColor,
      disabled = false,
      textVariant = 'paragraph_medium_semiBold',
      placeholder = '',
    } = props;
    const classes = useNakedInputStyles({
      border,
      ...(!disabled ? { borderColor } : { borderColor: 'grey_400' }),
      textVariant,
      ...styles,
    });
    return (
      <div ref={ref} className={`${classes.inputContainer} `}>
        <input
          {...{ onChange, value, disabled, placeholder }}
          className={`${classes[textVariant]} ${
            disabled ? classes.disabled : ''
          }`}
        />
      </div>
    );
  }
);
