import { useSelectStyles } from './SideBar.styles';
import { SideBarProps } from './SideBar.types';
import { forwardRef } from 'react';

export const SideBar = forwardRef(
  (props: SideBarProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, headerSideBar, isCollopsed, buttonSideBar } = props;
    const classes = useSelectStyles();
    const collopsedClass = classes[isCollopsed ? 'collopsed':'notCollopsed'];;
    return (
      <div {...ref} className={`${classes.container}  ${collopsedClass}`}>
        <div className={classes.sideBarButton}>
        {buttonSideBar} 
        </div>
        {headerSideBar} 
        {children.map((child) => child)}
      </div>
    );
  }
);
