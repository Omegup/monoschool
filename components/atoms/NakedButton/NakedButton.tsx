import { forwardRef } from 'react';
import { ControlledNakedButtonProps } from './NakedButton.type';
import { useNakedInputStyles } from './NakedButton.style';
import { styles } from '../common/styles';
import { joinClassNames } from '@omegup-school/ui-configs/typography';

export const NakedButton = forwardRef(
  (props: ControlledNakedButtonProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      onClick,
      endIcon,
      startIcon,
      text,
      disabled = false,
      textVariant = 'paragraph_medium_semiBold',
      ...styling
    } = props;
    const classes = useNakedInputStyles({
      disabled,
      ...styling,
      ...styles,
    });
    return (
      <div ref={ref} className={classes.buttonContainer} {...{ onClick }}>
        {startIcon}
        {text !== undefined ?<button
          {...{ disabled }}
          className={joinClassNames(
            classes.button,
            classes[textVariant],
            disabled ? classes.disabled : ''
          )}
        >
          {text}
        </button>:<></>}
        {endIcon}
      </div>
    );
  }
);
