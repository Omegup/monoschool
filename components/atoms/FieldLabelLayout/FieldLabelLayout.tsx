import { forwardRef } from 'react';
import { FieldLabelLayoutProps } from './FieldLabelLayout.type';
import { useFieldLabelLayoutStyles } from './FieldLabelLayout.style';
import { joinClassNames } from '@omegup-school/ui-configs/typography';

export const FieldLabelLayout = forwardRef(
  (props: FieldLabelLayoutProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      children: [label, input],
      variant,
    } = props;
    const classes = useFieldLabelLayoutStyles();

    return (
      <div className={classes.container} ref={ref}>
        <div className={joinClassNames(classes[variant])}>
          <span className={classes.label}>{label}</span>
          <div className={classes.input}>{input}</div>
        </div>
      </div>
    );
  }
);
