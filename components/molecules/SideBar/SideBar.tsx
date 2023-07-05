import { ArrowCircleRight, Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './SideBar.styles';
import { ControlledSideBarProps } from './SideBar.types';
import { forwardRef } from 'react';
import { ButtonSideBar } from '../ButtonSideBar';
import { HeaderSideBar } from '../HeaderSideBar';

export const SideBar = forwardRef(
  (props: ControlledSideBarProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, children, header, isCollopsed, button } = props;
    const classes = useSelectStyles();

    const openedClass = classes[isCollopsed ? 'opened' : 'closed'];
    return (
      <label
        tabIndex={-1}
        className={`${classes.label} ${classes[style]} ${classes[size]}  ${openedClass}`}
      >
        <div className={classes.container}>
          <div className={classes.sideBarButton}>
            {' '}
            <ButtonSideBar {...button} isOpened={isCollopsed} />
          </div>
          <HeaderSideBar isOpened={isCollopsed} {...header} />
          {children.map((child) => child)}
        </div>
      </label>
    );
  }
);
