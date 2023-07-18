import { spacing } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';
import { IconContainerProps } from './IconContainer.type';

export const useIconContainerStyles = createUseStyles({
  mainContainer: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBlock: ({ paddingBlock }: Partial<IconContainerProps>) =>
      paddingBlock ? spacing[paddingBlock] : 0,
    paddingInline: ({ paddingInline }: Partial<IconContainerProps>) =>
      paddingInline ? spacing[paddingInline] : 0,
    transform: ({ rotation }: Partial<IconContainerProps>) =>
      `rotate(${rotation}deg)`,
  },
});
