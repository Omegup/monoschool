import { useSelectStyles } from './SideBar.styles';
import { ControlledSideBarProps } from './SideBar.types';
import { forwardRef } from 'react';
import { ButtonSideBar } from '../ButtonSideBar';
import { HeaderSideBar } from '../HeaderSideBar';

export const SideBar = forwardRef(
  (props: ControlledSideBarProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, header, isCollopsed, button } = props;
    const classes = useSelectStyles();

    const openedClass = classes[isCollopsed ? 'opened' : 'closed'];
    return (
      <div {...ref} className={`${classes.container}  ${openedClass}`}>
        <div className={classes.sideBarButton}>
          <ButtonSideBar {...button} isOpened={isCollopsed} />
        </div>
        <HeaderSideBar isOpened={isCollopsed} {...header} />
        {children.map((child) => child)}
      </div>
    );
  }
);
