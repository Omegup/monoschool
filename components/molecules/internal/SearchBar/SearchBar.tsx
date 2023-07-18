import { Container, NakedInput } from '@omegup-school/ui-atoms';
import { forwardRef } from 'react';
import { ControllerSearchBarProps } from './SearchBar.type';
import { NakedInputProps } from '@omegup-school/ui-atoms/NakedInput/NakedInput.type';
import React from 'react';
import { colorsStyles } from '@omegup-school/ui-configs/colors';

export const SearchBar = forwardRef(
  (props: ControllerSearchBarProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      variant,
      clearIcon,
      startIcon,
      placeholder,
      onChange,
      value,
      disabled,
      onClear,
      displayClearIcon,
    } = props;
    const colorInput = {
      colorPlaceholder: 'grey_400',
      inputColor: 'grey_500',
    } satisfies {
      [k in 'colorPlaceholder' | 'inputColor']: keyof typeof colorsStyles;
    };
    const borderColor = {
      FilterSearchBar: 'background_overlay',
      NavSearchBar: 'grey_500',
    } satisfies {
      [k in 'FilterSearchBar' | 'NavSearchBar']: NakedInputProps['borderColor'];
    };
    const textVariant = {
      FilterSearchBar: 'paragraph_xSmall_regular',
      NavSearchBar: 'paragraph_medium_semiBold',
    } satisfies {
      [k in 'FilterSearchBar' | 'NavSearchBar']: NakedInputProps['textVariant'];
    };
    const NakedInputVariant = {
      FilterSearchBar: 'shadow',
      NavSearchBar: 'default',
    } satisfies {
      [k in 'FilterSearchBar' | 'NavSearchBar']: NakedInputProps['variant'];
    };
    return (
      <Container {...ref}>
        <NakedInput
          {...ref}
          {...(displayClearIcon
            ? {
                endIcon: clearIcon,
              }
            : {})}
          {...(startIcon
            ? {
                startIcon: startIcon,
              }
            : {})}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          value={value}
          border="b2"
          borderColor={borderColor[variant]}
          color={colorInput.inputColor}
          colorPlaceholder={colorInput.colorPlaceholder}
          variant={NakedInputVariant[variant]}
          textVariant={textVariant[variant]}
          onClickEndIcon={(e)=>onClear}
        />
      </Container>
    );
  }
);
