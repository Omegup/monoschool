import { Container, Text } from '@omegup-school/ui-atoms';
import { forwardRef } from 'react';
import { FieldLabelProps } from './FieldLabel.type';

export const FieldLabel = forwardRef(
  (props: FieldLabelProps, ref: React.Ref<HTMLDivElement>) => {
    const { label, size, required = false } = props;
    const variant: { ['']: keyof typeof typoStyles } = {
      xSmall: '',
      medium: '',
    }[size];
    return (
      <Container ref={ref}>
        <Text text={label} color="danger_700" {...{ variant }} />
        {required && <Text text={'*'} color="danger_700" {...{ variant }} />}
      </Container>
    );
  }
);
