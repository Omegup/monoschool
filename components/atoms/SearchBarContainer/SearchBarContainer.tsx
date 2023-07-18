import { forwardRef } from 'react';
import { useSearchBarStyles } from './SearchBarContainer.styles';
import { SearchBarContainerProps } from './SearchBarContainer.types';
import { joinClassNames } from '@omegup-school/ui-configs/typography';

export const SearchBarContainer = forwardRef(
  (props: SearchBarContainerProps,ref: React.Ref<HTMLDivElement>) => {
    const { variant, children} = props;
    const classes = useSearchBarStyles();

    return (
      <div {...ref} className={joinClassNames(classes.container,classes[variant])}>
        {children ? children: }
      </div>
    );
  }
);
