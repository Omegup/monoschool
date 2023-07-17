import { NakedInput, SearchBarContainer } from '@omegup-school/ui-atoms';
import { forwardRef } from 'react';
import { SearchBarProps } from './SearchBar.type';


export const SearchBar = forwardRef(
  (props: SearchBarProps, ref: React.Ref<HTMLDivElement>) => {
    const {
     variant,clearIcon,startIcon,placeholder,setText
    } = props;
return (
      <SearchBarContainer variant={variant} ref={ref} >
        <NakedInput
        {...(clearIcon
          ? {
              endIcon: (
                clearIcon
              ),
            }
          : {})}
        {...(startIcon
          ? {
              startIcon: (
                startIcon
              ),
            }
          : {})}
        placeholder={placeholder}
        disabled={props.disabled}
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        border="b2"
        borderColor={FIELD_COLORS[props.color]}
      />
      </SearchBarContainer>
    );
  }
);
