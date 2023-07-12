export interface RadioProps {
  onCheck: (index: number) => void,
  checked: boolean,
  disabled?: boolean,
  name : string,
  variant : 'solid' | 'scale' | 'border',
  size : 'small' | 'medium' | 'large',
}