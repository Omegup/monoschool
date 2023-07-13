/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import { ControlledHeadListeExportButtonProps } from './HeadListeExportButton.types';
import { Container, NakedButton } from '@omegup-school/ui-atoms';
import { shadowXSmall } from '@omegup-school/ui-configs/effects/shadow';

export const HeadListeExportButton = forwardRef(
  (props: ControlledHeadListeExportButtonProps) => {
    const { label, icon, onClick } = props;
    return (
        <NakedButton
          text={label}
          textVariant="paragraph_small_regular"
          borderRadius="r5"
          paddingBlock="s4"
          paddingInline="s4"
          lineHeight="medium"
          color="grey_400"
          shadow={shadowXSmall}
          endIcon={icon}
          onClick={onClick}
          gap="s4"
        />
    );
  }
);
