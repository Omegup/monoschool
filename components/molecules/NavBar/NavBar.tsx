import React from 'react'
import { useNavbarStyle } from './NavBar.styles'
import { NavbarProps } from './NavBar.types';

export const Navbar = ({ navItems, selectedIndex, onClick }: NavbarProps) => {
  const classes = useNavbarStyle();

  return (
    <div className={classes.navbarContainer}>
      <div className={classes.navbarSearch}>Search</div>
      {navItems.map(({label,icon}, index) => (
        <div key={index} className={classes.navbarItem}>
          {icon}
          <span className={classes.navbarLabel}>{label}</span>
        </div>
      )
      )}
    </div>
  )
}
