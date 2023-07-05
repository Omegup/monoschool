import { useSelectStyles } from './SideBar.styles';
import { ControlledSideBarProps } from './SideBar.types';
import { forwardRef } from 'react';
import { ButtonSideBar } from '../ButtonSideBar';
import { HeaderSideBar } from '../HeaderSideBar';

export const SideBar = forwardRef(
  (props: ControlledSideBarProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, header, isCollopsed, button } = props;
    const classes = useSelectStyles();

    const collopsedClass = classes[isCollopsed ? 'collopsed':'notCollopsed'];;
    return (
      <div {...ref} className={`${classes.container}  ${collopsedClass}`}>
        <div className={classes.sideBarButton}>
          <ButtonSideBar {...button} isCollopsed={isCollopsed} />
        </div>
        <HeaderSideBar isOpened={isCollopsed} {...header} />
        {children.map((child) => child)}
      </div>
    );
  }
);
