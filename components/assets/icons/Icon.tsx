import * as icons from '../icons'
export const Icon = ({ name, ...props }: {
  name: keyof typeof icons,
  width?: string | undefined;
  height?: string | undefined;
  color?: string | undefined;
}) => {
  const Icon = icons[name]
  return <Icon {...props} />
}