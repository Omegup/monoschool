import { forwardRef } from 'react';
import { ControlleNakedInputProps } from './NakedInput.type';
import { useNakedInputStyles } from './NakedInput.style';
import { styles } from '../common/styles';
import { FIELD_COLORS } from '@omegup-school/ui-configs/colors';

export const NakedInput = forwardRef(
  (props: ControlleNakedInputProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      onChange,
      endIcon,
      startIcon,
      value,
      border,
      borderColor,
      disabled = false,
      textVariant = 'paragraph_medium_semiBold',
      placeholder = '',
    } = props;
    const classes = useNakedInputStyles({
      border,
      disabled,
      ...(!disabled
        ? borderColor === FIELD_COLORS['default'] && value
          ? { borderColor: 'dark_overline' }
          : { borderColor }
        : { borderColor: 'grey_400' }),
      textVariant,
      ...styles,
    });
    return (
      <div ref={ref} className={`${classes.inputContainer} `}>
        {startIcon}
        <input
          {...{ onChange, value, disabled, placeholder }}
          className={`${classes[textVariant]} ${
            disabled ? classes.disabled : ''
          }`}
        />
        {endIcon}
      </div>
    );
  }
);
