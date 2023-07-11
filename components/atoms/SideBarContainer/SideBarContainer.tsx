import { useSelectStyles } from './SideBarContainer.styles';
import { SideBarContainerProps } from './SideBarContainer.types';
import { forwardRef } from 'react';

export const SideBarContainer = forwardRef(
  (props: SideBarContainerProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, isCollopsed, buttonSideBar } = props;
    const classes = useSelectStyles();
    const collopsedClass = classes[isCollopsed ? 'collopsed':'notCollopsed'];;
    return (
      <div {...ref} className={`${classes.container}  ${collopsedClass}`}>
        <div className={classes.sideBarButton}>
        {buttonSideBar} 
        </div>
        {children} 
       
      </div>
    );
  }
);
