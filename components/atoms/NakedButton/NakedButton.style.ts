import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { ControlledNakedButtonProps } from './NakedButton.type';

export const useNakedInputStyles = createUseStyles({
  buttonContainer: {
    display: 'flex',
    overflow: 'hidden',
    paddingInline: ({ paddingInline }: Partial<ControlledNakedButtonProps>) =>
      paddingInline ? spacing[paddingInline] : 0,
    paddingBlock: ({ paddingBlock }: Partial<ControlledNakedButtonProps>) =>
      paddingBlock ? spacing[paddingBlock] : 0,
    borderRadius: ({ borderRadius }: Partial<ControlledNakedButtonProps>) =>
      borderRadius ? borders[borderRadius] : 0,
    gap: spacing['s2'],
    opacity: ({ disabled }: Partial<ControlledNakedButtonProps>) =>
      disabled ? 0.5 : 0.8,
    boxShadow: ({ shadow }: Partial<ControlledNakedButtonProps>) =>
      shadow ? shadow : '',
    backgroundColor: ({ bg }: Partial<ControlledNakedButtonProps>) =>
      bg ? colorsStyles[bg] : '',
    border: ({ border, borderColor }: Partial<ControlledNakedButtonProps>) =>
      borderColor
        ? `${border ? borders[border] : 0}px solid ${colorsStyles[borderColor]}`
        : '',
        lineHeight:({ lineHeight }: Partial<ControlledNakedButtonProps>)=>lineHeight?H:''
  },
  button: {
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    color: ({ color }: Partial<ControlledNakedButtonProps>) =>
      color ? colorsStyles[color] : '',
  },
  filledInput: {
    border: `${spacing.s1}px solid ${colorsStyles['dark_overline']}`,
  },
  disabled: { backgroundColor: colorsStyles['background_default'] },
  ...styles,
});
