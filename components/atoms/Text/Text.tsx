import { forwardRef } from 'react';
import { TextProps } from './Text.types';
import { useTextStyles } from './Text.styles';

export const Text = forwardRef(
  (props: TextProps, ref?: React.Ref<HTMLSpanElement>) => {
    const { text, variant, color = 'currentColor' } = props;
    const classes = useTextStyles();
    return (
      <span ref={ref} className={`${classes[variant]} ${classes[color]}`}>
        {text}
      </span>
    );
  }
);
