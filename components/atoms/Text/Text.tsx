import { forwardRef } from 'react';
import { TextProps } from './Text.types';
import { useTextStyles } from './Text.styles';
import { joinClassNames } from '@omegup-school/ui-configs/typography';

export const Text = forwardRef(
  (props: TextProps, ref?: React.Ref<HTMLSpanElement>) => {
    const {
      text,
      variant,
      color = 'dark_default',
      ellipsis,
      lineHeight,
    } = props;
    const classes = useTextStyles({ ellipsis, lineHeight });
    return (
      <span
        ref={ref}
        className={joinClassNames(
          classes.textStyle,
          classes[variant],
          classes[color],
          ellipsis ? classes.ellipsisText : ''
        )}
      >
        {text}
      </span>
    );
  }
);