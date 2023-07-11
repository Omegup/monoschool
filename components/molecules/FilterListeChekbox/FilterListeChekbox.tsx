import {
  FilterContainer,
  Text,
  FilterCheckBox,
  NakedCheckBox,
} from '@omegup-school/ui-atoms';
import { forwardRef } from 'react';
import { FilterListeChekboxProps } from './FilterListeChekbox.types';


export const FilterListeChekbox = forwardRef(
  (props: FilterListeChekboxProps, ref: React.Ref<HTMLDivElement>) => {
    const { data } = props;

    return (
      <FilterContainer ref={ref} hasSeparatedLine={false}>
        <div>//searchBar</div>
        {data.map((item) => (
          <FilterCheckBox
            showImage={item.showImage}
            imageURL={item.imageURL}
            checkbox={
              <NakedCheckBox
                checked={item.checked}
                disabled={item.disabled}
                onChange={item.onChange}
                onBlur={item.onBlur}
                variant={'select'}
                size={'large'}
              />
            }
            text={<Text text={item.label} variant="paragraph_xSmall_regular" />}
          />
        ))}
      </FilterContainer>
    );
  }
);
