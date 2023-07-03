export type ChipsProps = {
  style:  'border' | 'flat'
  size: 'large' | 'medium' | 'small';
  disabled?: boolean;
  label: string;
};
export interface ControlledChipsProps extends ChipsProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
  onClick:()=>void;
}