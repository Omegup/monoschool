import { createUseStyles } from 'react-jss';
import { widths } from '@omegup-school/ui-configs/sizes/widths';
import { spacing } from '@omegup-school/ui-configs/sizes/spacing';

const useStyles = createUseStyles({
  container: {
    maxInlineSize: widths.panel.form,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.s8,
    padding: spacing.s9,
    margin: 'auto',
    width: '100%',
  },
});

export const FormPanel = ({
  children,
  onSubmit,
}: {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
}) => {
  const classes = useStyles();
  return (
    <form className={classes.container} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
