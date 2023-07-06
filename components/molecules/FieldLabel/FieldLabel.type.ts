export interface FieldLabelProps {
  label: string;
  required?: boolean | undefined; // default false, optional prop to indicate if field is mandatory,
  size: 'medium' | 'xSmall';
}
