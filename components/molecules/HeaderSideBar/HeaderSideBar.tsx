import { useSelectStyles } from './HeaderSideBar.styles';
import { ControlledHeaderSideBarProps } from './HeaderSideBar.types';
import { forwardRef } from 'react';

export const HeaderSideBar = forwardRef(
  (props: ControlledHeaderSideBarProps, ref: React.Ref<HTMLDivElement>) => {
    const { title, Logo, Search, SearchIcon,logoOnClick,onClick, isCollopsed } = props;
    const classes = useSelectStyles();
    return (
      <div {...ref} className={classes.container}>
        <div className={classes.logo} onClick={logoOnClick}>
          <span className={classes.logoIcon}> {Logo} </span>
          {!isCollopsed && <span className={classes.labelText}>{title}</span>}
        </div>
        {!isCollopsed ? (
          Search
        ) : (
          <span className={classes.SearchIcon} onClick={onClick}>{SearchIcon}</span>
        )}
      </div>
    );
  }
);
