import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';

export const useSelectStyles = createUseStyles({
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
  container: {
    display: 'flex',
    alignItems: 'center',
    color: colors.dark.default,
    width: '100%',
    gap: spacing.s8,
    '$medium > &': {
      padding: spacing.s4,
      borderRadius: borders.r5,
    },
  },
  label: {
    display: 'flex',
    borderRadius: borders.r5,
    width: 'fit-content',
    '& > $container:has(input:not(:checked)) > $labelText': {
      color: colors.dark.default,
    },
    '& > $container:has(input:checked)': {
      backgroundColor: colors.blue[500],
      color: colors.light[500],
    },
    '&:focus': {
      outline: 'none',
    },
    '&:focus-within:not(:focus)': {
      '& > $container:has(input:checked)': {
        outlineWidth: borders.b5,
        outlineColor: 'currentcolor',
        outlineStyle: 'solid',
      },
      '&> $container:has(input:not(:checked))': {
        color: colors.blue[500],
      },
    },
    '&:hover > $container:has(input:not(:checked))': {
      '& > $labelText': {
        color: colors.blue[500],
      },
      background: colors.light[500],
    },
    '&:hover > $container:has(input:checked)': {
      backgroundColor: colors.blue[600],
    },
    '&:active': {
      '&:hover > $container:has(input:checked)': {
        backgroundColor: colors.blue[500],
      },
      '&:hover > $container:has(input:not(:checked))': {
        background: colors.background.default,
      },
      '& > $container:has(input:checked)': {
        backgroundColor: colors.blue[500],
      },
      '& > $container:has(input:not(:checked))': {
        color: colors.blue[500],
        outlineWidth: borders.b5,
        outlineColor: 'currentcolor',
        outlineStyle: 'solid',
      },
    },
  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
});
