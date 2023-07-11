import { forwardRef } from 'react';
import { ControlleNakedDropDownProps } from './NakedDropDown.type';
import { useNakedDropDownStyles } from './NakedDropDown.style';
import { styles } from '../common/styles';
import { joinClassNames } from '@omegup-school/ui-configs/typography';
import { FIELD_COLORS } from '../constants/FieldColors.cnst';

export const NakedDropDown = forwardRef(
  (props: ControlleNakedDropDownProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      onChange,
      startIcon,
      value,
      border,
      borderColor,
      disabled = false,
      textVariant = 'paragraph_medium_semiBold',
      placeholder = '',
      options,
    } = props;
    const classes = useNakedDropDownStyles({
      border,
      startIcon,
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
      <div ref={ref} className={classes.selectContainer}>
        {startIcon}
        <select
          {...{ onChange, value, disabled, placeholder }}
          className={joinClassNames(
            classes[textVariant],
            disabled ? classes.disabled : ''
          )}
        >
          <option value="">Selectionner</option>
          {options.map(({ id, ...restProps }) => (
            <option key={id}>{restProps.label}</option>
          ))}
        </select>
      </div>
    );
  }
);
