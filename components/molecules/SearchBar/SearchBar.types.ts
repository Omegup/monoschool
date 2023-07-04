export type SearchBarProps = {
  style:'navBar' | 'sideBar' | 'filterSearch';
  displayClose: boolean;
  placeholder: string;
  firstIcon: JSX.Element;
  secondIcon:JSX.Element;
  inputType:string;
};
export interface ControlledSearchBarProps extends SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
}
