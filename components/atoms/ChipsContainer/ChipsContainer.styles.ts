import { colors } from '@omegup-school/ui-configs/colors';
import { borders, spacing, widths } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';

import { ChipsContainerProps } from './ChipsContainer.types';
import { chipsThemeToJss } from './ChipsContainer-styles/chipsContainerThemeToJss';

type Sizes = readonly [
  `$${ChipsContainerProps['size']}>$container>&`,
  { width: string; height: string }
];
const chipsSizes = Object.fromEntries<'', Record<'', Sizes>>(
  Object.entries(widths.chips).map(([k, v]) => [
    `$${k}>$container>&`,
    {
      width: v,
      height: v,
    },
  ])
);

export const useChipsStyles = createUseStyles(
  {
    input: {
      clip: 'rect(0 0 0 0)',
      position: 'absolute',
    },
    label: {
      display: 'inline-flex',
      userSelect: 'none',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      cursor: 'pointer',
    },
    large: {
      '& > $container': {
        padding: spacing.s5,
        gap: 7,
        borderRadius: '14px',
        border: [borders.b3, 'solid'],
      },
    },
    medium: {
      '& > $container': {
        padding: spacing.s4,
        gap: spacing.s3,
        borderRadius: spacing.s6,
        border: [borders.b2, 'solid'],
      },
    },
    small: {
      '& > $container': {
        padding: spacing.s3,
        gap: spacing.s3,
        borderRadius: 8.4,
        border: [borders.b1, 'solid'],
      },
    },
    icon: {
      ...chipsSizes,
      display: 'flex',
      justifyItems: 'center',
    },
    ...chipsThemeToJss(),
  }
);
