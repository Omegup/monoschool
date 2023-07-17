import { Container, Text } from '@omegup-school/ui-atoms';
import { forwardRef } from 'react';
import { FieldLabelProps } from './FieldLabel.type';
import { TextProps } from '@omegup-school/ui-atoms/Text/Text.types';
import { ContainerProps } from '@omegup-school/ui-atoms/Container/Container.types';

export const FieldLabel = forwardRef(
  (
    props: FieldLabelProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const { label, size, required = false, color = 'dark_default' } = props;
    const variant = (
      {
        xSmall: 'paragraph_xSmall_semiBold',
        medium: 'paragraph_medium_semiBold',
      } satisfies { [k in typeof size]: TextProps['variant'] }
    )[size];
    const paddingInline = (
      {
        xSmall: 's2',
        medium: 's8',
      } satisfies { [k in typeof size]: ContainerProps['paddingInline'] }
    )[size];
    return (
      <Container ref={ref} {...{ paddingInline }}>
        <Text text={label} {...{ variant, color }} />
        {required && <Text text={'*'} color="danger_700" {...{ variant }} />}
      </Container>
    );
  }
);
