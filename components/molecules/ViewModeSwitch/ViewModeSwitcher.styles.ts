import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { ViewModeSwitcherProps } from './ViewModeSwitcher.types';

type Sizes = readonly [
  `$${ViewModeSwitcherProps['size']}>$container>&`,
  { width: string; height: string }
];
const checkboxSizes = Object.fromEntries<'', Record<'', Sizes>>(
  Object.entries(widths.checkbox).map(([k, v]) => [
    `$${k}>$container>&`,
    {
      width: v,
      height: v,
    },
  ])
);

export const useViewModeSwitcherStyles = createUseStyles({
  solid: {},
  border: {},
  flat: {},
  text: {},
  large: {},
  medium: {},
  small: {},
  disabled: {},
  enabled: {},
  input: {
   
  },
  label: {
    display: 'flex',
    borderRadius: borders.r5,
    '& > $input:checked + $container': {
      backgroundColor: colors.blue[500],
      color: colors.light[500],
      '& $square path': {
        fill: colors.light[500],
      },
      '& $tick': {
        color: colors.blue[500],
        opacity: 1,
      },
    },
    '&:focus': {
      outline: 'none'
    },
    '&:focus-within:not(:focus) > $input': {
      '& + $container': {
        outlineWidth: borders.b5,
        outlineColor: 'currentcolor',
        outlineStyle: 'solid',
      },
      '&:not(:checked) + $container': {
        color: colors.blue[500],
      },
    },
    '&:hover > $input:checked + $container': {
      backgroundColor: colors.blue[600],
      '& $tick': {
        color: colors.blue[600],
        opacity: 0.6,
      },
    },
    '&:hover > $input:not(:checked) + $container': {
      color: colors.blue[500],
      background: colors.light[500],
      '& $tick': {
        opacity: 0.4,
      },
    },

    '&:active': {
      '&:hover > $input:checked + $container': {
        '& $tick': {
          opacity: 0,
        },
      },
      '&:hover > $input:not(:checked) + $container': {
        background: colors.background.default,
        '& $tick': {
          opacity: 1,
        },
      },
      '& > $input:checked + $container': {
        backgroundColor: colors.blue[500],
        '& $tick': {
          color: colors.blue[500],
          opacity: 1,
        },
      },
      '& > $input:not(:checked) + $container': {
        color: colors.blue[500],
        outlineWidth: borders.b5,
        outlineColor: 'currentcolor',
        outlineStyle: 'solid',
        '& $tick': {
          opacity: 0,
        },
      },
    },
  },
  checkbox: {
    ...checkboxSizes,
    display: 'block',
    position: 'relative',
    '&>*': {
      position: 'absolute',
    },
  },
  tick: {
    opacity: 0,
  },

  container:  {
    display: "inline-flex",
    alignItems: "flex-start",
    borderRadius:"10px 0px 0px 10px",
    background: "var(--background-background, #FFFFFE)",
    boxShadow:
      "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)"
  }
  ,
  element:{

    display: "flex",
    padding: "6px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    // borderRadius: "10px 0px 0px 10px",
    background: "var(--blue-blue, #3DA9FC)"
  },

  labelText: {
    ...styles.paragraph_small_regular,
  },
  square: {},
});
