export type FilterCheckBoxProps = {
  label: string;
  showImage: boolean;
  imageURL:string;
  checkbox:JSX.Element
  text:JSX.Element
};
export interface ControlledFilterCheckBoxProps extends FilterCheckBoxProps {
  value: boolean;
  onChange: (value: boolean) => void;
}