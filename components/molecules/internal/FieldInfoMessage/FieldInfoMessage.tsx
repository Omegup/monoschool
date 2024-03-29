import { Container, IconContainer, Text } from '@omegup-school/ui-atoms';
import { forwardRef } from 'react';
import { FieldInfoMessageProps } from './FieldInfoMessage.type';

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
        <IconContainer
          name="Info"
          color={color}
          height={'smallSvg'}
          width={'smallSvg'}
        />
        <Text
          text={label}
          {...{ variant: 'paragraph_xSmall_regular', color }}
        />
      </Container>
    );
  }
);
