import { Square, Tick } from '@omegup-school/ui-assets';
import { useFilterCheckBoxStyles } from './FilterCheckBox.styles';
import { ControlledFilterCheckBoxProps } from './FilterCheckBox.types';
import { forwardRef } from 'react';

export const FilterCheckBox = forwardRef(
  (props: ControlledFilterCheckBoxProps, ref: React.Ref<HTMLInputElement>) => {
    const { text, imageURL, checkbox, showImage, onChange, value } = props;
    const classes = useFilterCheckBoxStyles();

    return (
      <div {...ref} className={classes.container}>
        <span className={classes.checkbox}>{checkbox}</span>
        {showImage && (
          <svg className={classes.image}>
            <image href={imageURL} width={'100%'} height={'100%'} />
          </svg>
        )}
        {text}
      </div>
    );
  }
);
