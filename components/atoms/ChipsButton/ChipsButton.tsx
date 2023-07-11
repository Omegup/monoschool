import { widths } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';
import { forwardRef } from 'react';
import { ControlledChipsButtonProps } from './ChipsButton.types';

const useStyles = createUseStyles({
  button: {
    all: 'unset',
    cursor: 'pointer',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
  },
  large: { width: widths.chips.large },
  medium: { width: widths.chips.medium },
  small: { width: widths.chips.small },
});

export const ChipsButton = forwardRef(
  (props: ControlledChipsButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const classes = useStyles();
    const { icon, onClick, size } = props;
    return (
      <button
        {...ref}
        className={`${classes.button}  ${classes[size]}`}
        onClick={onClick}
      >
        <span className={classes.icon}>{icon}</span>
      </button>
    );
  }
);
