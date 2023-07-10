import { Square, Tick } from '@omegup-school/ui-assets';
import { useFilterCheckBoxStyles } from './FilterCheckBox.styles';
import { FilterCheckBoxProps } from './FilterCheckBox.types';
import { forwardRef } from 'react';
import { ContainerStateContext } from '../contexts/pointer';

export const FilterCheckBox = forwardRef(
  (props: FilterCheckBoxProps, ref: React.Ref<HTMLInputElement>) => {
    const { text, imageURL, checkbox, showImage } = props;
    const classes = useFilterCheckBoxStyles();

    return (
      <div {...ref} className={classes.container}>
         <ContainerStateContext.Provider value={classes.container}>
        {checkbox}
        {showImage && (
          <svg className={classes.image}>
            <image href={imageURL} width={'100%'} height={'100%'} />
          </svg>
        )}
        {text}
        </ContainerStateContext.Provider>
      </div>
    );
  }
);
