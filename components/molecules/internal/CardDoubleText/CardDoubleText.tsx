import { forwardRef } from 'react';
import { ControlledCardDoubleTextProps } from './CardDoubleText.types';
import { Container, Text } from '@omegup-school/ui-atoms';

export const CardDoubleText = forwardRef(
  (props: ControlledCardDoubleTextProps, ref: React.Ref<HTMLDivElement>) => {
    const { text, subText } = props;

    return (
      <Container ref={ref} direction="column">
        <Text text={text} variant="paragraph_xSmall_regular" />
        <Text text={subText} variant="paragraph_small_medium" />
      </Container>
    );
  }
);
export const CardHeaderDoubleText = forwardRef(
  (props: ControlledCardDoubleTextProps, ref: React.Ref<HTMLDivElement>) => {
    const { text, subText } = props;

    return (
      <Container ref={ref} direction="column">
        <Text text={text} variant="paragraph_xSmall_regular" />
        <Text text={subText} variant="paragraph_xSmall_medium" />
      </Container>
    );
  }
);
