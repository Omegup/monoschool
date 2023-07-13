import { colors } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';

export const useSelectStyles = createUseStyles({
  solid: {},
  border: {},
  flat: {},
  text: {},
  labelText: {},
  label: {
    display: 'flex',
    borderRadius: borders.r5,
    gap: spacing.s7,
    '&:has(input:checked) > $container': {
      backgroundColor: colors.blue[500],
      color: colors.light[500],
    },

    '&:has(input:not(:checked):focus) > $container': {
      color: colors.blue[500],
      outlineWidth: borders.b5,
      outlineColor: colors.blue[500],
      outlineStyle: 'solid',
    },

    '&:has(input:checked:focus) > $container': {
      outlineWidth: borders.b5,
      outlineColor: colors.light[500],
      outlineStyle: 'solid',
    },

    '&:active:has(input:not(:checked)) > $container': {
      color: colors.blue[500],
      outlineWidth: borders.b5,
      outlineColor: colors.blue[500],
      outlineStyle: 'solid',
    },

    '&:active:has(input:checked:focus) > $container': {
      outlineWidth: borders.b5,
      outlineColor: colors.light[500],
      outlineStyle: 'solid',
    },

    '&:hover:has(input:checked) > $container': {
      backgroundColor: colors.blue[600],
    },

    '&:hover:has(input:not(:checked)) > $container': {
      color: colors.blue[500],
      background: colors.light[500],
    },

    '&:hover:active:has(input:checked) > $container': {
      backgroundColor: colors.blue[500],
      outlineColor: colors.light[500],
    },

    '&:hover:active:has(input:not(:checked)) > $container': {
      backgroundColor: 'transparent',
      outlineColor: colors.blue[500],
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    color: colors.dark.default,
    gap: spacing.s8,
    outlineWidth: borders.b5,
    outlineStyle: 'solid',
    outlineColor: 'transparent',
    borderRadius: borders.r5,
  },
  large: {
    '& > $container': {
      padding: spacing.s5,
      '& $labelText': {
        ...styles.paragraph_large_regular,
      },
    },
  },
  medium: {
    '& > $container': {
      padding: spacing.s4,
      '& $labelText': {
        ...styles.paragraph_medium_regular,
      },
    },
  },
  small: {
    '& > $container': {
      padding: spacing.s3,
      '& $labelText': {
        ...styles.paragraph_small_regular,
      },
    },
  },
  disabled: {
    pointerEvents: 'none',
    color: colors.dark.default,
    opacity: 0.8,
    '& > $container': {
      opacity: 0.4,
    },
  },

});
