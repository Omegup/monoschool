import { useSelectStyles } from './HeaderSideBar.styles';
import { ControlledHeaderSideBarProps } from './HeaderSideBar.types';
import { forwardRef } from 'react';

export const HeaderSideBar = forwardRef(
  (props: ControlledHeaderSideBarProps, ref: React.Ref<HTMLDivElement>) => {
    const { title, logo, search, searchIcon,logoOnClick,onClick, isCollopsed } = props;
    const classes = useSelectStyles();
    return (
      <div {...ref} className={classes.container}>
        <div className={classes.logo} onClick={logoOnClick}>
          <span className={classes.logoIcon}> {logo} </span>
          {!isCollopsed && title}
        </div>
        {!isCollopsed ? (
          search
        ) : (
          <span className={classes.SearchIcon} onClick={onClick}>{searchIcon}</span>
        )}
      </div>
    );
  }
);
