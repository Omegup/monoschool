export interface NavbarProps {
  navItems : NavItems[];
  onClick ?: (index :number) => void;
  selectedIndex ?: number;
}

export interface NavItems {
  label : string;
  icon? : JSX.Element;
}