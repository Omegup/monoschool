import { Square, Tick } from '@omegup-school/ui-assets';
import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { forwardRef } from 'react';

type Sizes = readonly [
  `$${ControlledSelectProps['size']}>$container>&`,
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
    clip: 'rect(0 0 0 0)',
    position: 'absolute',
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
      outline: 'none',
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
  container: {
    display: 'flex',
    alignItems: 'center',
    color: colors.dark.default,
    gap: spacing.s8,
    '$medium > &': {
      padding: spacing.s4,
      borderRadius: borders.r5,
    },
  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
  square: {},
});

export interface SelectProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  disabled?: boolean;
  label: string;
}

export interface ControlledSelectProps extends SelectProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}

export const Select = forwardRef(
  (props: ControlledSelectProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, disabled, label, onChange, value, onBlur } = props;
    const classes = useStyles(),
      disabledClass = classes[disabled ? 'disabled' : 'enabled'];
    return (
      <label
        tabIndex={-1}
        className={`${classes.label} ${classes[style]} ${classes[size]} ${disabledClass}`}
      >
        <input
          type="checkbox"
          className={classes.input}
          onChange={(e) => onChange(e.target.checked)}
          {...{ ref, onBlur }}
          checked={value}
        />
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
  }
);
