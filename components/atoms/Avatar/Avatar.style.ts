import { createUseStyles } from 'react-jss';
import { AvatarProps } from './Avatar.type';
import { widths } from '@omegup-school/ui-configs/sizes';

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
