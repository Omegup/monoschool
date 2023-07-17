import { createUseStyles } from 'react-jss';
import { DisplaySwitcherOnHoverEffectProps } from './DisplaySwitcherOnHoverEffect.type';

export const useDisplaySwitcherOnHoverEffectStyle = createUseStyles({
  mainContainer: {
    width: ({ width }: Partial<DisplaySwitcherOnHoverEffectProps>) =>
      width || '',
    height: ({ height }: Partial<DisplaySwitcherOnHoverEffectProps>) =>
      height || '',
    '&:hover ': {
      '& $unhovered': { display: 'none' },
      '& $hovered': { display: 'flex' },
    },
  },
  unhovered: {
    width: '100%',
    height: '100%',
    display: 'flex',
    transition: 'display 1s',
  },
  hovered: {
    width: '100%',
    height: '100%',
    display: 'none',
    transition: 'display 1s',
  },
});
