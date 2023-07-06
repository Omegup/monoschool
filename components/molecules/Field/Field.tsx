import { forwardRef } from 'react';
import { Container, Text } from '@omegup-school/ui-atoms';
import { ControlledFieldProps } from './Field.type';
import { FieldLabel } from '../internal';
import { FieldInfoMessage } from '../internal/FieldInfoMessage';
import { colorsStyles } from '@omegup-school/ui-configs/colors';

export const Field = forwardRef(
  (props: ControlledFieldProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      color,
      input,
      onChange,
      required,
      value,
      variant,
      descriptionText,
      infoText,
      label,
      disabled,
    } = props;
    const size: 'xSmall' | 'medium' = (
      {
        spaced: 'medium',
        condensed: 'xSmall',
      } as { [k in 'spaced' | 'condensed']: 'xSmall' | 'medium' }
    )[variant];
    const infoTextColor: keyof typeof colorsStyles = (
      {
        danger: 'danger_700',
        default: 'grey_500',
        info: 'headline_500',
        success: 'success_700',
        warning: 'warning_600',
      } as {
        [k in
          | 'danger'
          | 'info'
          | 'success'
          | 'warning'
          | 'default']: keyof typeof colorsStyles;
      }
    )[color];
    return (
      <Container ref={ref} gap={'s5'} alignItems="center">
        {variant == 'spaced' && label && (
          <FieldLabel {...{ label, size, required }} />
        )}
        
        {infoText && (
          <FieldInfoMessage {...{ label: infoText, color: infoTextColor }} />
        )}
        {label && <FieldLabel {...{ label, size }} />}
        {descriptionText && (
          <Text
            text={descriptionText}
            variant="paragraph_xSmall_regular"
            color={'dark_default'}
          />
        )}
      </Container>
    );
  }
);
