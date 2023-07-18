import { forwardRef } from 'react';
import { NotepadLayoutProps } from './NotepadLayout.type';
import { useNotepadLayoutStyles } from './NotepadLayout.style';
import { joinClassNames } from '@omegup-school/ui-configs/typography';

export const NotepadLayout = forwardRef(
  (props: NotepadLayoutProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      children: [label, input], iconWithText,
      variant,
    } = props;
    const classes = useNotepadLayoutStyles();

    return (
      <div
        className={joinClassNames(classes.container, classes[variant])}
        ref={ref}
      >
        <div className={classes.input}>{iconWithText}</div>
        <div> <span className={classes.label}>{label}</span>
          <div className={classes.input}>{input}</div>
        </div>
      </div>
    );
  }
);
