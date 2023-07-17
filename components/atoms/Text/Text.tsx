import { forwardRef } from 'react';
import { TextProps } from './Text.types';
import { useTextStyles } from './Text.styles';
import { joinClassNames } from '@omegup-school/ui-configs/typography';

export const Text = forwardRef(
  (props: TextProps, ref?: React.Ref<HTMLSpanElement>) => {
    const { text, variant, color = 'dark_default' } = props;
    const classes = useTextStyles();
    console.log({ classes });
    return (
      <span
        ref={ref}
        className={joinClassNames(classes[variant], classes[color])}
      >
        {text}
      </span>
    );
  }
);
