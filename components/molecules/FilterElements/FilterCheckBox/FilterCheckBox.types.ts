export type FilterCheckBoxProps = {
  disabled?: boolean;
  label: string;
  showImage: boolean;
  imageURL:string;
  checkbox:JSX.Element
};
export interface ControlledFilterCheckBoxProps extends FilterCheckBoxProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}