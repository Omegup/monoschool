import {
  Container,
  NakedInput,
  FilterSearchBar,
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
    return (
      <Container {...ref}>
        {variant !== 'filterSearch' ? (
          <NakedInput
            {...(clearIcon
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
          />
        ) : (
          <FilterSearchBar
            value={value}
            onChange={onChange}
            onClear={onClear}
            displayClearIcon={displayClearIcon}
            placeholder={placeholder}
            startIcon={startIcon}
            clearIcon={clearIcon}
          />
        )}
      </Container>
    );
  }
);
