import { Container, Text } from '@omegup-school/ui-atoms';
import { typoStyles } from '@omegup-school/ui-configs/typography';
import { forwardRef } from 'react';
import { FieldLabelProps } from './FieldLabel.type';
import { spacing } from '@omegup-school/ui-configs/sizes';

export const FieldLabel = forwardRef(
  (props: FieldLabelProps, ref: React.Ref<HTMLDivElement>) => {
    const { label, size, required = false, color = 'dark_default' } = props;
    const variant: keyof typeof typoStyles = (
      {
        xSmall: 'paragraph_xSmall_semiBold',
        medium: 'paragraph_medium_semiBold',
      } as { [k in typeof size]: keyof typeof typoStyles }
    )[size];
    const paddingInline: keyof typeof spacing = (
      {
        xSmall: 's2',
        medium: 's8',
      } as { [k in typeof size]: keyof typeof spacing }
    )[size];
    return (
      <Container ref={ref} {...{ paddingInline }}>
        <Text text={label} {...{ variant, ...(color ? { color } : {}) }} />
        {required && <Text text={'*'} color="danger_700" {...{ variant }} />}
      </Container>
    );
  }
);
