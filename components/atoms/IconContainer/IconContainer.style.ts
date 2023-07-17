import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';
import { IconContainerProps } from './IconContainer.type';
import { colorsStyles } from '@omegup-school/ui-configs/colors';

export const useIconContainerStyles = createUseStyles({
  mainContainer: {
    cursor: 'pointer',
    display:'flex',
    paddingBlock: ({ paddingBlock }: Partial<IconContainerProps>) =>
      paddingBlock ? spacing[paddingBlock] : 0,
    paddingInline: ({ paddingInline }: Partial<IconContainerProps>) =>
      paddingInline ? spacing[paddingInline] : 0,
    transform: ({ rotation }: Partial<IconContainerProps>) =>
      `rotate(${rotation}deg)`,
    backgroundColor: ({ bg }: Partial<IconContainerProps>) =>
      bg ? colorsStyles[bg] : '',
    borderRadius: ({ borderRadius }: Partial<IconContainerProps>) =>
      borderRadius ? borders[borderRadius] : '',
  },
});
