import { forwardRef } from 'react';
import { ControlledAvatarWithNameProps } from './AvatarWithName.types';
import { Container, Text } from '@omegup-school/ui-atoms';

export const AvatarWithName = forwardRef(
  (props: ControlledAvatarWithNameProps, ref: React.Ref<HTMLDivElement>) => {
    const { text, avatar } = props;

    return (
      <Container ref={ref} gap={'s5'} alignItems="center">
        {avatar}
        <Text text={text} variant="paragraph_small_medium" />
      </Container>
    );
  }
);
