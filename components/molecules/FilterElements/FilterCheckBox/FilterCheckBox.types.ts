export type FilterCheckBoxProps = {
  size: 'large' | 'medium' | 'small';
  style?:'solid' | 'border' | 'flat' | 'text';
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