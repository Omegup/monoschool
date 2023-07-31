export type SvgContainerProps = {
  height?: number | string;
  width?: number | string;
  path: JSX.Element;
};

export const SvgContainer = ({ height, width = height, path }: SvgContainerProps) => <svg
  {...{ width, height }}
  viewBox="0 0 24 24" >{path}</svg>;

