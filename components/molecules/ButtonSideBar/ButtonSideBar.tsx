import { colors } from '@omegup-school/ui-atoms/colors';
import { shadowXSmall } from '@omegup-school/ui-atoms/effects/shadow';
import { borders, spacing, widths } from '@omegup-school/ui-atoms/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { ArrowCircleLeft, ArrowCircleRight } from '@omegup-school/ui-assets';

type Sizes = readonly [
  `$${ButtonSideBarProps['size']}>$button>&`,
  { width: string; height: string }
];
const SideBarSizes = Object.fromEntries<'', Record<'', Sizes>>(
  Object.entries(widths.ButtonSideBar).map(([k, v]) => [
    `$${k}>$button>&`,
    {
      width: v,
      height: v,
    },
  ])
);

const useStyles = createUseStyles({
  large: {},
  medium: {},
  small: {},
  button: {
    width: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.s5,
    borderRadius: '50%',
    background: colors.background.default,
    /* Drop Shadow/Small */
    boxShadow:
      '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)',
  },
  arrow: { ...SideBarSizes, display: 'flex', alignItems: 'center' },
  label: {},
});

export type ButtonSideBarProps = {
  size: 'large' | 'medium' | 'small';
};
export interface ControlledButtonSideBarProps extends ButtonSideBarProps {
  isOpened?: boolean;
  onChange: (isOpened: boolean) => void;
  onBlur: () => void;
}

export const ButtonSideBar = ({
  isOpened,
  onChange,
  size,
}: ControlledButtonSideBarProps) => {
  const classes = useStyles();
  console.log(size)
  return (
    <div
      className={`${classes.button} ${classes[size]} `}
      onClick={() => {
        onChange(!isOpened);
      }}
    >
      {isOpened ? (
        <span className={classes.arrow}>
          {' '}
          <ArrowCircleLeft />{' '}
        </span>
      ) : (
        <span className={classes.arrow}>
          <ArrowCircleRight />
        </span>
      )}
    </div>
  );
};
