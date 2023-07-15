import { Container, Text } from '@omegup-school/ui-atoms';
import { forwardRef } from 'react';
import { FieldInfoMessageProps } from './FieldInfoMessage.type';
import { Info } from '@omegup-school/ui-assets';
import { colorsStyles } from '@omegup-school/ui-configs/colors';

export const FieldInfoMessage = forwardRef(
  (props: FieldInfoMessageProps, ref: React.Ref<HTMLDivElement>) => {
    const { label, color } = props;

    return (
      <Container
        ref={ref}
        paddingInline="s8"
        paddingBlock="s3"
        gap="s2"
        alignItems="center"
      >
        <Info color={colorsStyles[color]} height={16} width={16} />
        <Text
          text={label}
          {...{ variant: 'paragraph_xSmall_regular', color }}
        />
      </Container>
    );
  }
);
