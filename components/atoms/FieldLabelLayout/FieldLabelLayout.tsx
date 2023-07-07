import { forwardRef } from 'react';
import { FieldLabelLayoutProps } from './FieldLabelLayout.type';
import { useFieldLabelLayoutStyles } from './FieldLabelLayout.style';

export const FieldLabelLayout = forwardRef(
  (props: FieldLabelLayoutProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, variant } = props;
    const classes = useFieldLabelLayoutStyles();

    return (
      <div className={`${classes.container}`} ref={ref}>
        <div
          className={`${
            variant === 'condensed' ? classes.condensed : classes.spaced
          }`}
        >
          {children}
        </div>
      </div>
    );
  }
);
