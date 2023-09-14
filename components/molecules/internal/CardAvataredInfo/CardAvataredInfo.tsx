import { forwardRef } from 'react';
import { ControlledCardAvataredInfoProps } from './CardAvataredInfo.types';
import { Container, Text } from '@omegup-school/ui-atoms';

export const CardAvataredInfo = forwardRef(
  (props: ControlledCardAvataredInfoProps, ref: React.Ref<HTMLDivElement>) => {
    const { text, avatar } = props;
  return (
    <Container
      ref={ref}
      gap={'s5'}
      alignItems="center"
   >
      {avatar}
      <Text text={text} ref={ref} variant="paragraph_small_medium" />
    </Container>
  )
})
