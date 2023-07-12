import { colors } from '@omegup-school/ui-configs/colors';
import { borders, spacing, widths } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';

import { ChipsContainerProps } from './ChipsContainer.types';

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

export const useSelectStyles = createUseStyles({
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
  border: {
    '& > $input:not(:checked) + $container': {
      borderColor: colors.background.outline,
      '&:hover': {
        backgroundColor: colors.background.secondary,
      },
      '&:active': {
        backgroundColor: colors.background.overlay,
      },
    },
    '& > $input:checked + $container': {
      color: colors.blue[500],
      borderColor: colors.blue[500],
      '&:hover ': {
        backgroundColor: colors.light[200],
      },
      '&:active:hover ': {
        backgroundColor: colors.light[400],
      },
    
    },
  },
  flat: {
    '& > $input + $container': {
      borderColor: 'transparent',
    },
    '& > $input:not(:checked) + $container': {
      backgroundColor: colors.background.secondary,
      '&:hover': {
        backgroundColor: colors.background.overlay,
      },
      '&:active': {
        backgroundColor: colors.background.outline,
      },
    },
    '& > $input:checked + $container': {
      color: colors.blue[500],
      backgroundColor: colors.light[100],
      '&:hover ': {
        backgroundColor: colors.light[200],
      },
      '&:active ': {
        backgroundColor: colors.light[500],
      },
    },
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
  enabled: {
    ///focus
    '&:has($input:active:not(:hover)),&:has($input:focus)': {
      '& > $container': {
        outlineWidth: borders.b2,
        outlineColor: colors.blue[600],
        outlineStyle: 'solid',
        backgroundColor: colors.background.default,
      },
      '&$flat > $input:not(:checked) + $container': {
        backgroundColor: colors.background.secondary,
      },
      '&$flat > $input:checked + $container': {
        backgroundColor: colors.light[100],
      },
    }
    
  },
  disabled: {
    pointerEvents: 'none',
    '&$flat > $input:not(:checked) + $container': {
      opacity: '0.4',
      backgroundColor: colors.background.overlay,
    },
    '&&&$flat > $input:checked + $container': {
      opacity: '0.3',
      backgroundColor: colors.blue[100],
    },
    '&&$border > $container': {
      opacity: '0.4',
      backgroundColor: colors.background.default,
    },
  },
  icon: {
    ...chipsSizes,
    display: 'flex',
    justifyItems: 'center',
  },
});
