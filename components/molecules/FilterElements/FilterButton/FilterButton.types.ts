export type FilterButtonProps = {
  showIcon: boolean;
  label: string;
  icon:JSX.Element;
};
export interface ControlledFilterButtonProps extends FilterButtonProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}