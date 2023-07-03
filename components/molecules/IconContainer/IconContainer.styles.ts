import { createUseStyles } from "react-jss";
import { IconContainerProps } from "./IconContainer.types";
import { widths } from "@omegup-school/ui-atoms/sizes";

export const useIconContainerStyles = createUseStyles({
  textStyle: {
    justifyContent: "center",
    alignItems: 'center',
    padding: ({ padding }: Partial<IconContainerProps>) => padding || 0,
    width: ({ width }: Partial<IconContainerProps>) => width || +widths.icon.svg,
    height: ({ height }: Partial<IconContainerProps>) => height || +widths.icon.svg,
  }
})