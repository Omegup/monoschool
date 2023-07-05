export type FilterButtonProps = {
  showIcon: boolean;
  label: string;
  icon:JSX.Element;
};
export interface ControlledFilterButtonProps extends FilterButtonProps {
  onClick: () => void;
  onBlur: () => void;
}