export type SelectProps = {
  size: 'large' | 'medium' | 'small';
  disabled?: boolean;
  label: string;
  showImage: boolean;
  imageURL:string;
};
export interface ControlledSelectProps extends SelectProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}