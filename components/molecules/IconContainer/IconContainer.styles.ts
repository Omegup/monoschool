import { createUseStyles } from "react-jss";
import { IconContainerProps } from "./IconContainer.types";

export const useIconContainerStyles = createUseStyles({
  textStyle: {
    justifyContent: "center",
    alignItems: 'center',
    padding: ({ padding }: Partial<IconContainerProps>) => padding || 0,
    width: ({ width }: Partial<IconContainerProps>) => width || 24,
    height: ({ height }: Partial<IconContainerProps>) => height || 24,
  }
})