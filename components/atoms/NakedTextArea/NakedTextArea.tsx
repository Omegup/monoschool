import { forwardRef } from 'react';
import { ControlleNakedTextAreaProps } from './NakedTextArea.type';
import { useNakedTextAreaStyles } from './NakedTextArea.style';
import { styles } from '../common/styles';
import { FIELD_COLORS } from '@omegup-school/ui-configs/colors';

export const NakedTextArea = forwardRef(
  (props: ControlleNakedTextAreaProps, ref: React.Ref<HTMLDivElement>) => {
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
      rows = 3,
    } = props;
    const classes = useNakedTextAreaStyles({
      border,
      startIcon,
      endIcon,
      ...(!disabled
        ? borderColor === FIELD_COLORS['default'] && value
          ? { borderColor: 'dark_overline' }
          : { borderColor }
        : { borderColor: 'grey_400' }),
      textVariant,
      disabled,
      ...styles,
    });
    return (
      <div ref={ref} className={`${classes.inputContainer} `}>
        <div> {startIcon}</div>
        <textarea
          {...{ onChange, value, disabled, placeholder, rows }}
          className={`${classes[textVariant]} ${
            disabled ? classes.disabled : ''
          }`}
        />
        <div>{endIcon}</div>
      </div>
    );
  }
);
