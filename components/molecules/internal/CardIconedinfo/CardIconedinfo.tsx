import { forwardRef } from 'react';
import { CardIconedinfoProps } from './CardIconedinfo.types';
import { Container, Text } from '@omegup-school/ui-atoms';

export const CardIconedinfo = forwardRef(
  (props: CardIconedinfoProps, ref: React.Ref<HTMLDivElement>) => {
    const { icon, text } = props;

    return (
      <Container ref={ref} gap={'s5'} paddingInline="s5" alignItems="center">
        {icon}
        <Text text={text} ref={ref} variant="paragraph_small_medium" />
      </Container>
    );
  }
);
