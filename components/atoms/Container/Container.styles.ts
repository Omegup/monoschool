import { createUseStyles } from 'react-jss';
import { ContainerProps } from './Container.types';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { colorsStyles } from '@omegup-school/ui-configs/colors';

export const useContainerStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: ({ direction }: Partial<ContainerProps>) => direction,
    paddingInline: ({ paddingInline }: Partial<ContainerProps>) =>
      paddingInline ? spacing[paddingInline] : 0,
    paddingBlock: ({ paddingBlock }: Partial<ContainerProps>) =>
      paddingBlock ? spacing[paddingBlock] : 0,
    gap: ({ gap }: Partial<ContainerProps>) => (gap ? spacing[gap] : 0),
    alignItems: ({ alignItems }: Partial<ContainerProps>) =>
      alignItems || 'start',
    justifyContent: ({ justifyContent }: Partial<ContainerProps>) =>
      justifyContent || 'start',

    boxShadow: ({ shadow }: Partial<ContainerProps>) => (shadow ? shadow : ''),
    borderRadius: ({ borderRadius }: Partial<ContainerProps>) =>
      borderRadius ? borders[borderRadius] : '',
    backgroundColor: ({ bg }: Partial<ContainerProps>) =>
      bg ? colorsStyles[bg] : '',
    border: ({ border, borderColor }: Partial<ContainerProps>) =>
      `${border ? borders[border] : 0}px solid ${
        borderColor ? colorsStyles[borderColor] : ''
      }`,
    width: ({ width }: Partial<ContainerProps>) => width || '',
    height: ({ height }: Partial<ContainerProps>) => height || '',
    maxWidth: ({ maxWidth }: Partial<ContainerProps>) => maxWidth || '',
    maxHeight: ({ maxHeight }: Partial<ContainerProps>) => maxHeight || '',
  },
});
