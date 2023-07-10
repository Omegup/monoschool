import { createUseStyles } from "react-jss";
import { ContainerProps } from "./Container.types";
import { spacing } from "@omegup-school/ui-configs/sizes";
import { colors } from "@omegup-school/ui-configs/colors";

export const useContainerStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: ({ direction }: Partial<ContainerProps>) => direction,
    paddingInline: ({ paddingInline }: Partial<ContainerProps>) => paddingInline ? spacing[paddingInline] : 0,
    paddingBlock: ({ paddingBlock }: Partial<ContainerProps>) => paddingBlock ? spacing[paddingBlock] : 0,
    gap: ({ gap }: Partial<ContainerProps>) => gap ? spacing[gap] : 0,
    alignItems: ({ alignItems }: Partial<ContainerProps>) => alignItems || "start",
    justifyContent: ({ justifyContent }: Partial<ContainerProps>) => justifyContent || "start",
    backgroundColor:  ({ backgroundColor }: Partial<ContainerProps>) => backgroundColor || "",
  }
})