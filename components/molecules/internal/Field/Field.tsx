import { forwardRef } from 'react';
import { Container, FieldLabelLayout, Text } from '@omegup-school/ui-atoms';
import { FieldProps } from './Field.type';
import { FieldInfoMessage } from '../FieldInfoMessage';
import { FieldContext } from '@omegup-school/ui-atoms';
import { FieldLabel } from '../FieldLabel';
import { NakedInputProps } from '@omegup-school/ui-atoms/NakedInput/NakedInput.type';
import { FIELD_COLORS } from '@omegup-school/ui-atoms/constants/FieldColors.cnst';

const sizes: { [k in 'spaced' | 'condensed']: 'xSmall' | 'medium' } = {
  spaced: 'medium',
  condensed: 'xSmall',
};
export const Field = forwardRef(
  (props: FieldProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      color = 'default',
      input,
      required,
      variant,
      descriptionText,
      infoText,
      label,
      disabled,
    } = props;

    const textCheck = (text: string | null | undefined) =>
      text != undefined && text != null;
    const size: 'xSmall' | 'medium' = sizes[variant];
    const infoTextColor: NakedInputProps['borderColor'] = FIELD_COLORS[color];
    return (
      <Container ref={ref} gap={'s4'} direction="column" alignItems="start">
        <FieldLabelLayout {...{ variant }}>
          <Container>
            {textCheck(label) && (
              <FieldLabel
                {...{ label: label!, size, required }}
                {...(variant === 'condensed'
                  ? { color: FIELD_COLORS[color] }
                  : {})}
              />
            )}
          </Container>
          <FieldContext.Provider value={{ disabled }}>
            {input}
          </FieldContext.Provider>
        </FieldLabelLayout>
        {textCheck(infoText) && (
          <FieldInfoMessage {...{ label: infoText!, color: infoTextColor }} />
        )}
        {textCheck(descriptionText) && (
          <Container paddingInline="s8">
            <Text
              text={descriptionText!}
              variant="paragraph_xSmall_regular"
              color={'dark_default'}
            />
          </Container>
        )}
      </Container>
    );
  }
);
