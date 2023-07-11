import { FilterContainer, FilterButton, Text } from '@omegup-school/ui-atoms';
import { forwardRef } from 'react';
import { FilterListeButtonProps } from './FilterListeButton.types';

export const FilterListeButton = forwardRef(
  (props: FilterListeButtonProps, ref: React.Ref<HTMLDivElement>) => {
    const { data } = props;

    return (
      <FilterContainer ref={ref} hasSeparatedLine={true}>
        {data.map((item) => (
          <FilterButton ref={ref} onClick={item.onClick} active={item.active}>
            <Text
              text={item.label}
              variant="paragraph_xSmall_regular"
            />
            {item.showIcon && item.icon}
          </FilterButton>
        ))}
      </FilterContainer>
    );
  }
);
