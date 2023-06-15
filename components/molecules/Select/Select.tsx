import { Square, Tick } from '@omegup-school/ui-assets';
import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';

type Sizes = readonly [
  `$${SelectProps['size']}>$container>&`,
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

const useStyles = createUseStyles({
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
    display: 'none',
  },
  label: {
    display: 'flex',
    borderRadius: borders.r5,
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
  container: {
    display: 'flex',
    alignItems: 'center',
    color: colors.dark.default,
    gap: spacing.s8,
    '$medium > &': {
      padding: spacing.s4,
      borderRadius: borders.r5,
    },
    '$label:hover > &': {
      color: colors.blue[500],
      background: colors.light[500],
      '& $tick': {
        opacity: 1,
      },
    },
    '$label:active:hover > &': {
      background: colors.background.default,
    },
    '$label:active > &': {
      color: colors.blue[500],
      outlineWidth: borders.b5,
      outlineColor: 'currentcolor',
      outlineStyle: 'solid',
      '& $tick': {
        opacity: 0,
      },
    },
    '$input:checked + &': {
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
    '$input:checked:hover + &': {
      backgroundColor: colors.blue[600],
      '& $tick': {
        color: colors.blue[600],
      },
    },
    '$label:active:hover > $input:checked + &': {
      '& $tick': {
        opacity: 0,
      },
    },
    '$label:active > $input:checked + &': {
      backgroundColor: colors.blue[500],
      '& $tick': {
        color: colors.blue[500],
        opacity: 1,
      },
    },
  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
  square: {},
});

export type SelectProps = {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  disabled?: boolean;
  label: string;
};

export const Select = ({ size, style, disabled, label }: SelectProps) => {
  const classes = useStyles(),
    disabledClass = classes[disabled ? 'disabled' : 'enabled'];
  return (
    <label
      tabIndex={-1}
      className={`${classes.label} ${classes[style]} ${classes[size]} ${disabledClass}`}
    >
      <input type="checkbox" className={classes.input} />
      <div className={classes.container}>
        <span className={classes.checkbox}>
          <span className={classes.square}>
            <Square width="100%" />
          </span>
          <span className={classes.tick}>
            <Tick width="100%" />
          </span>
        </span>
        <span className={classes.labelText}>{label}</span>
      </div>
    </label>
  );
};