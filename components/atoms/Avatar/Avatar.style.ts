import { createUseStyles } from 'react-jss';
import { AvatarProps } from './Avatar.type';
import { borders, spacing, widths } from '@omegup-school/ui-configs/sizes';
import { colorsStyles } from '@omegup-school/ui-configs/colors';

const size = ({ size }: Partial<AvatarProps>) =>
  widths.avatar[size ?? 'medium'];

export const useAvatarStyles = createUseStyles({
  mainContainer: {
    display: 'flex',
    borderRadius: '50%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    width: size,
    height: size,
  },
});
export const useAvatarImageStyles = createUseStyles({
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
});
export const useDashboardTaskAvatarStyles = createUseStyles({
  mainContainer: {
    display: 'flex',
    borderRadius: '50%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    width: size,
    height: size,
    '&:hover': {
      outline: [borders.b6, 'solid', colorsStyles.pink_500],
    },
  },
  selected: {
    outline: [borders.b6, 'solid', colorsStyles.blue_500],
  },
});
