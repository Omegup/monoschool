import { createUseStyles } from 'react-jss';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { paddings } from '@omegup-school/ui-atoms/sizes/spacing';

const useStyles = createUseStyles({
  container: {
    maxInlineSize: widths.mid,
    padding: paddings.s6,
    margin: 'auto',
    width: '100%'
  },
});

export const FormPanel = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { container } = useStyles();
  return (
    <div className={container}>
      {children}
    </div>
  );
};
