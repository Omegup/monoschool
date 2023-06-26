export interface SubSideBarProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  label: string;
  Icon:({fill}:{fill:string})=>JSX.Element;
}

export interface ControlledSubSideBarProps extends SubSideBarProps {
  value: boolean;
  onClick: () => void;
  onBlur: () => void;
}
