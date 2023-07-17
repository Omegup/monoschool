

export interface SearchBarProps {
  variant:'navBar' | 'sideBar' | 'filterSearch';
  startIcon:JSX.Element;
  clearIcon:JSX.Element;
  placeholder: string;
  setText:(event:)=>{}
  
}
