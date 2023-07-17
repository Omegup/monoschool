import { forwardRef } from 'react';
import { useSearchBarStyles } from './SearchBarContainer.styles';
import { SearchBarContainerProps } from './SearchBarContainer.types';

export const SearchBarContainer = forwardRef(
  (props: SearchBarContainerProps,ref: React.Ref<HTMLDivElement>) => {
    const { variant, children} = props;
    const classes = useSearchBarStyles();

    return (
      <div {...ref} className={classes[variant]}>
        {children}
      </div>
    );
  }
);
