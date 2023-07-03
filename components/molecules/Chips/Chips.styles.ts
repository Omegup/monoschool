import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing, widths } from '@omegup-school/ui-atoms/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { ChipsProps } from './Chips.types';

type Sizes = readonly [
  `$${ChipsProps['size']}>$container>&`,
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
      '&:active ': {
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
      '& > $labelText': {
        fontSize: '16px',
      },
    },
  },
  medium: {
    '& > $container': {
      padding: spacing.s4,
      gap: spacing.s3,
      borderRadius: spacing.s6,
      border: [borders.b2, 'solid'],
      '& > $labelText': {
        fontSize: '14px',
      },
    },
  },
  small: {
    '& > $container': {
      padding: spacing.s3,
      gap: spacing.s3,
      borderRadius: 8.4,
      border: [borders.b1, 'solid'],
      '& > $labelText': {
        fontSize: '12px',
      },
    },
  },
  disabled: {
    opacity: '0.4',
  },
  enabled: {
    '&:focus-within:not(:focus) > $input': {
      '& + $container': {
        outlineWidth: borders.b2,
        outlineColor: colors.blue[600],
        outlineStyle: 'solid',
      },
    },
  },
  input: {
    clip: 'rect(0 0 0 0)',
    position: 'absolute',
  },
  label: {
    display: 'inline-flex',
    '&:focus': {
      outline: 'none',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  Essential: {
    ...chipsSizes,
    display: 'flex',
    alignItems: 'center',
  },
  Close: {
    ...chipsSizes,
    display: 'flex',
    alignItems: 'center',
  },
  labelText: {},
  square: {},
});
