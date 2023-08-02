import { forwardRef } from 'react';
import { TextProps } from './Text.types';
import { useTextStyles } from './Text.styles';
import { joinClassNames } from '@omegup-school/ui-configs/typography';

export const Text = forwardRef(
  (props: TextProps, ref?: React.Ref<HTMLSpanElement>) => {
    const { text, variant, color } = props;
    const classes = useTextStyles();

    return (
      <span
        ref={ref}
        className={joinClassNames(classes[variant], color && classes[color])}
      >
        {text}
      </span>
    );
  }
);
