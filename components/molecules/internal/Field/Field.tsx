import { forwardRef } from 'react';
import { Container, FieldLabelLayout, Text } from '@omegup-school/ui-atoms';
import { FieldProps } from './Field.type';
import { FieldInfoMessage } from '../FieldInfoMessage';
import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { FieldContext } from '@omegup-school/ui-atoms';
import { FieldLabel } from '../FieldLabel';

export const colors: {
  [k in
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'default']: keyof typeof colorsStyles;
} = {
  error: 'danger_700',
  default: 'grey_400',
  info: 'headline_500',
  success: 'success_700',
  warning: 'warning_600',
};
const sizes: { [k in 'spaced' | 'condensed']: 'xSmall' | 'medium' } = {
  spaced: 'medium',
  condensed: 'xSmall',
};
export const Field = forwardRef(
  (props: FieldProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      color='default',
      input,
      required,
      variant,
      descriptionText,
      infoText,
      label,
      disabled,
    } = props;
    const size: 'xSmall' | 'medium' = sizes[variant];
    const infoTextColor: keyof typeof colorsStyles = colors[color];
    return (
      <Container ref={ref} gap={'s4'} direction="column" alignItems="start">
        <FieldLabelLayout {...{ variant }}>
          <Container>
            {label && (
              <FieldLabel
                {...{ label, size, required }}
                {...(variant === 'condensed' ? { color: colors[color] } : {})}
              />
            )}
          </Container>
          <FieldContext.Provider value={{ disabled }}>
            {input}
          </FieldContext.Provider>
        </FieldLabelLayout>
        {infoText && (
          <FieldInfoMessage {...{ label: infoText, color: infoTextColor }} />
        )}
        {descriptionText && (
          <Container paddingInline="s8">
            <Text
              text={descriptionText}
              variant="paragraph_xSmall_regular"
              color={'dark_default'}
            />
          </Container>
        )}
      </Container>
    );
  }
);
