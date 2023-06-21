import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing, widths } from '@omegup-school/ui-atoms/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';

export const useCheckBoxStyles = createUseStyles({
  label: {
    display: 'flex',
    flexDirection: 'row',
    alignItems : 'center',
    gap: spacing.s4,
  },
  checkBoxText : {
    ...styles.paragraph_medium_regular ,
  } ,
  input: {
    clip: 'rect(0 0 0 0)',
    position: 'absolute',
    '&:disabled + $container': {
      opacity: 0.4,
    },
  },
  container: {
    display: 'grid',
    placeItems: 'center',
    borderRadius: borders.r5,
    border: `${borders.b3}px solid ${colors.grey[500]}`,
    color: 'transparent',
    backgroundColor: 'transparent',
  },
  solid: {
    // focused & hovered
    '& > $input:focus + $container': {
      outline: `${borders.b5}px solid ${colors.blue[900]}`,
    },
    '& > $input:not(:checked) + $container:hover': {
      backgroundColor: colors.grey[400],
      border: `${borders.b3}px solid ${colors.grey[400]}`,
      outline: `${borders.b5}px solid ${colors.grey[400]}`,
      outlineOffset: -1,
    },
    // enabled
    '& > $input:checked + $container': {
      border: `${borders.b3}px solid ${colors.blue[500]}`,
      color: colors.background.default,
      backgroundColor: colors.blue[500],
    },
    '& > $input:checked + $container:hover': {
      borderColor: colors.blue[700],
      backgroundColor: colors.blue[700],
    },
  },
  border: {
    // focused & hovered
    '& > $input:focus + $container': {
      outline: `${borders.b5}px solid ${colors.danger[600]}`,
    },
    '& > $input:not(:checked) + $container:hover': {
      color: colors.blue[500],
      backgroundColor: colors.light[400],
      border: `${borders.b3}px solid ${colors.blue[500]}`,
      outline: `${borders.b5}px solid ${colors.light[400]}`,
      outlineOffset: -1,
    },
    // enabled
    '& > $input:checked + $container': {
      color: colors.blue[500],
      border: `${borders.b3}px solid ${colors.blue[500]}`,
    },
    '& > $input:checked + $container:hover': {
      backgroundColor: colors.light[400],
      outline: `${borders.b5}px solid ${colors.light[400]}`,
      outlineOffset: -1,
    },
  },
  scale: {
    // focused
    '& > $input:focus + $container': {
      outline: `${borders.b5}px solid ${colors.danger[600]}`,
    },
    // enabled
    '& > $input:checked + $container': {
      border: `${borders.b3}px solid ${colors.blue[500]}`,
      color: colors.background.default,
      backgroundColor: colors.blue[500],
    },
  },
  large: {
    '& $container': {
      width: widths.checkbox.large,
      height: widths.checkbox.large,
    },
  },
  medium: {
    '& $container': {
      width: widths.checkbox.medium,
      height: widths.checkbox.medium,
    },
  },
  small: {
    '& $container': {
      width: widths.checkbox.small,
      height: widths.checkbox.small,
    },
  },
});
