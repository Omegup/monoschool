import { assignment, sea } from '@omegup-school/ui-assets';
import { colors } from '@omegup-school/ui-atoms/colors';
import { shadowXXLarge } from '@omegup-school/ui-atoms/effects/shadow';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
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
});

export const SignInBanner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <img src={assignment} />
    </div>
  );
};
