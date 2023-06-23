export type FilterProps = {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  showIcon: boolean;
  label: string;
};
export interface ControlledFilterProps extends FilterProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}