import { createUseStyles } from 'react-jss';
import { InfinitScrollContainerProps } from './InfinitScrollContainer.type';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { colors } from '@omegup-school/ui-configs/colors';

export const useInfinitScrollContainerStyle = createUseStyles({
  container: {
    display: 'flex',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: spacing.s4,
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: borders.b10,
    },
    '&::-webkit-scrollbar-thumb': {
      background: colors.blue[500],
      borderRadius: borders.b10,
    },
    '&::-webkit-scrollbar-track-piece': {
      background: colors.light[500],
      borderRadius: borders.b10,
    },
    width: ({ width }: Partial<InfinitScrollContainerProps>) => width,
    height: ({ height }: Partial<InfinitScrollContainerProps>) => height,
    flexDirection: ({ direction }: Partial<InfinitScrollContainerProps>) =>
      direction,
    paddingInline: ({ paddingInline }: Partial<InfinitScrollContainerProps>) =>
      paddingInline ? spacing[paddingInline] : 0,
    paddingBlock: ({ paddingBlock }: Partial<InfinitScrollContainerProps>) =>
      paddingBlock ? spacing[paddingBlock] : 0,
    gap: ({ gap }: Partial<InfinitScrollContainerProps>) =>
      gap ? spacing[gap] : 0,
    alignItems: ({ alignItems }: Partial<InfinitScrollContainerProps>) =>
      alignItems || 'start',
    justifyContent: ({
      justifyContent,
    }: Partial<InfinitScrollContainerProps>) => justifyContent || 'start',
  },
});
