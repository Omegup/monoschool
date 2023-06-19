export type SelectProps = {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  disabled?: boolean;
  label: string;
  showImage: boolean;
  imageURL:string;
};
