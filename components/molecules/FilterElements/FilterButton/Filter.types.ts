export type FilterButtonProps = {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  showIcon: boolean;
  label: string;
};
export interface ControlledFilterButtonProps extends FilterButtonProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}