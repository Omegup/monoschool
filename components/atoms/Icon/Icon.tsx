import { IconsNames, iconsRecord } from "@omegup-school/ui-assets";

const svgElementsBuilder = {
  "path": (props: JSX.IntrinsicElements['path'], key: number) => <path key={key} {...props} />,
}

export const Icon = ({
  height,
  width,
  color,
  name,
  fill = "none",
  onClick,
}: {
  height?: string;
  width?: string;
  color?: string;
  fill?: string;
  name: IconsNames;
  onClick?: () => void;
}) => {
  const iconData = iconsRecord(color)[name];
  return <svg {...{ height, width, onClick, fill }} viewBox="0 0 24 24" >{
    iconData.map(([element, props], key) => svgElementsBuilder[element](props, key))
  }</svg>

}

