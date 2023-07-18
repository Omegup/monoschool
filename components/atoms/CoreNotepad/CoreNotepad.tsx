import { forwardRef } from 'react';
import { ControlleCoreNotepadProps } from './CoreNotepad.type';
import { useCoreNotepadStyles } from './CoreNotepad.style';
import { styles } from '../common/styles';
import { joinClassNames } from '@omegup-school/ui-configs/typography';
import { FIELD_COLORS } from '../constants/FieldColors.cnst';

export const CoreNotepad = forwardRef(
  (props: ControlleCoreNotepadProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      onChange,
      startIcon,
      value,

      disabled = false,
      textVariant = 'paragraph_medium_semiBold',
      placeholder = '',
      rows = 3,
    } = props;
    const classes = useCoreNotepadStyles({
      startIcon,
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
      </div>
    );
  }
);
