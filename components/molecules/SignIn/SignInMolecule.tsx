import { createUseStyles } from 'react-jss';
import { Logo, sea, assignment } from '@omegup-school/ui-assets';
import { LoginPanel } from '../Panel/LoginPanel';
import { colors } from '@omegup-school/ui-atoms/colors';
import { shadowXXLarge } from '@omegup-school/ui-atoms/effects/shadow';
import { FormPanel } from '../Panel/FormPanel';
import { styles } from '../common/styles';
import OutlinedInput from './Input';

type SignInProps = {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
};

const useStyles = createUseStyles({
  form: {},
  banner: {
    flex: 1,
    backgroundColor: colors.light[100],
    backgroundImage: `url(${sea})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'contain',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: shadowXXLarge,
    '&>img': {
      width: '100%',
    },
  },
  logo: {
    color: colors.blue[500],
  },
  header: {
    ...styles.heading_h5_bold,
    color: colors.dark.default,
  },
  subHeader: {
    ...styles.heading_h4_bold,
    color: colors.dark.default,
  },
  title: {
    color: colors.blue[500],
  },
});

export function SignIn({ onSubmit }: SignInProps) {
  const { form, banner, logo, header, subHeader, title } = useStyles();
  return (
    <LoginPanel>
      <div className={banner}>
        <img src={assignment} />
      </div>
      <FormPanel>
        <div className={form}>
          <div className={logo}>
            <Logo />
          </div>
          <div className={header}>Bienvenu</div>
          <div className={subHeader}>
            Dans <span className={title}>Omega School</span>
          </div>
          <div>
            <OutlinedInput label={'jj'} />
          </div>
          <form onSubmit={onSubmit}></form>
        </div>
      </FormPanel>
    </LoginPanel>
  );
}
