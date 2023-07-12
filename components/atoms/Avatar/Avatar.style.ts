import { createUseStyles } from 'react-jss';
import { AvatarProps } from './Avatar.type';
import { widths } from '@omegup-school/ui-configs/sizes';

export const useAvatarStyles = createUseStyles({
  mainContainer: {
    display: 'flex',
    borderRadius: '50%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Math.floor(Math.random() * 10),
    width: ({ size }: Partial<AvatarProps>) =>
      size ? widths.avatar[size] : widths.avatar.medium,
    height: ({ size }: Partial<AvatarProps>) =>
      size ? widths.avatar[size] : widths.avatar.medium,
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
});
