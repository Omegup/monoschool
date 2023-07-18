import { NakedInput, SearchBarContainer } from '@omegup-school/ui-atoms';
import { forwardRef } from 'react';
import { SearchBarProps } from './SearchBar.type';

export const SearchBar = forwardRef(
  (props: SearchBarProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      variant,
      clearIcon,
      startIcon,
      placeholder,
      change,
      text,
      disabled,
    } = props;
    return (
      <SearchBarContainer variant={variant} ref={ref}>
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
          onChange={change}
          value={text}
          border="b2"
          borderColor="grey_500"
        />
      </SearchBarContainer>
    );
  }
);
