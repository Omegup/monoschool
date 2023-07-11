import { createUseStyles } from "react-jss";
import { ContainerProps } from "./CardElementStoryContainer.types";
import { spacing } from "@omegup-school/ui-configs/sizes";
import { Avatar } from "@omegup-school/ui-assets";
import { colors } from "@omegup-school/ui-configs/colors";

export const useContainerStyles = createUseStyles({
  container: {
    display:  ({ display }: Partial<ContainerProps>) => display || "flex",
    flexDirection: ({ direction }: Partial<ContainerProps>) => direction,
    paddingInline: ({ paddingInline }: Partial<ContainerProps>) => paddingInline ? spacing[paddingInline] : 0,
    paddingBlock: ({ paddingBlock }: Partial<ContainerProps>) => paddingBlock ? spacing[paddingBlock] : 0,
    gap: ({ gap }: Partial<ContainerProps>) => gap ? spacing[gap] : 0,
    alignItems: ({ alignItems }: Partial<ContainerProps>) => alignItems || "start",
    justifyContent: ({ justifyContent }: Partial<ContainerProps>) => justifyContent || "start",
    width:({ width }: Partial<ContainerProps>) => width || "-webkit-fill-available",
    '&:hover': { borderRadius: "60px",
    border: "5px solid var(--blue-blue, #3DA9FC)",
    background: "url(<path-to-image>), lightgray 50% / cover no-repeat",
      color: colors.blue[500],
      '& $avatar': {
       
      }}
 },
 avatar:{

 },

text:{

}


})