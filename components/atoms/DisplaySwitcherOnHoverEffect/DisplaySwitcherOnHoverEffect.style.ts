import { createUseStyles } from 'react-jss';
import { DisplaySwitcherOnHoverEffectProps } from './DisplaySwitcherOnHoverEffect.type';

export const useDisplaySwitcherOnHoverEffectStyle = createUseStyles({
  mainContainer: {
    width: ({ width }: Partial<DisplaySwitcherOnHoverEffectProps>) =>
      width || '',
    height: ({ height }: Partial<DisplaySwitcherOnHoverEffectProps>) =>
      height || '',
    position: 'relative',
    '&:hover ': {
      '& $hovered': { opacity: 1 },
    },
  },
  unhovered: {
    width: '100%',
    height: '100%',
  },
  hovered: {
    opacity: 0,
    transition: 'opacity 1s',
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
  },
});
