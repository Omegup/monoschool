import * as icons from '@omegup-school/ui-assets/icons'
export const Icon = ({ name, onClick, ...props }: {
  name: keyof typeof icons,
  width?: string | undefined;
  height?: string | undefined;
  color?: string | undefined;
  onClick?: () => void;
}) => {
  const Icon = icons[name]
  return <span style={{
    display: 'flex',
  }} onClick={onClick}>
    <Icon {...props} />
  </span>
}