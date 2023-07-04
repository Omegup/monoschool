import { createUseStyles } from "react-jss";
import { ContainerProps } from "./Container.types";

export const useContainerStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: ({ direction }: Partial<ContainerProps>) => direction,
    paddingInline: ({ paddingInline }: Partial<ContainerProps>) => paddingInline || 0,
    paddingBlock: ({ paddingBlock }: Partial<ContainerProps>) => paddingBlock || 0,
    gap: ({ gap }: Partial<ContainerProps>) => gap || 0,
    alignItems: ({ alignItems }: Partial<ContainerProps>) => alignItems || "center",
    justifyContent: ({ justifyContent }: Partial<ContainerProps>) => justifyContent || "center",

  }
})