/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import { useSelectStyles } from './HeaderSideBar.styles';
import { ControlledHeaderSideBarProps } from './HeaderSideBar.types';
import { forwardRef } from 'react';

export const HeaderSideBar = forwardRef(
  (props: ControlledHeaderSideBarProps, ref: React.Ref<HTMLDivElement>) => {
    const { title, logo, search, searchIcon,onClickLogo,onClickSearsh, isCollopsed } = props;
    const classes = useSelectStyles();
    return (
      <div {...ref} className={classes.container}>
        <div className={classes.logo} onClick={onClickLogo}>
          <span className={classes.logoIcon}> {logo} </span>
          {!isCollopsed && title}
        </div>
        {!isCollopsed ? (
          search
        ) : (
          <span className={classes.SearchIcon} onClick={onClickSearsh}>{searchIcon}</span>
        )}
      </div>
    );
  }
);
