import {
  Container,
  NakedInput,
} from '@omegup-school/ui-atoms';
import { forwardRef } from 'react';
import { ControllerSearchBarProps } from './SearchBar.type';

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

    const borderColor={FilterSearchBar:"background_overlay",NavSearchBar:"grey_500"} satisfies [k in "FilterSearchBar"|"FilterSearchBar"]:keyof typeof colorsStyles;
    return (
      <Container {...ref}>
        
          <NakedInput
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
            borderColor="grey_500"
            variant={variant}
          />
        
      </Container>
    );
  }
);
