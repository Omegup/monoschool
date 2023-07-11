import { forwardRef } from 'react';
import { ControlleNakedTextAreaProps } from './NakedTextArea.type';
import { useNakedTextAreaStyles } from './NakedTextArea.style';
import { styles } from '../common/styles';
import { joinClassNames } from '@omegup-school/ui-configs/typography';
import { FIELD_COLORS } from '../constants/FieldColors.cnst';

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
      <div ref={ref} className={classes.inputContainer}>
        <div className={classes.startIcon}> {startIcon}</div>
        <textarea
          {...{ onChange, value, disabled, placeholder, rows }}
          className={joinClassNames(
            classes[textVariant],
            disabled ? classes.disabled : ''
          )}
        />
        <div className={classes.endIcon}>{endIcon}</div>
      </div>
    );
  }
);
