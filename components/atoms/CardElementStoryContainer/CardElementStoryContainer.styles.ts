import { createUseStyles } from "react-jss";
import { CardElementStoryContainerProps } from "./CardElementStoryContainer.types";
import { spacing } from "@omegup-school/ui-configs/sizes";
import { Avatar } from "@omegup-school/ui-assets";
import { colors } from "@omegup-school/ui-configs/colors";

export const useCardElementStoryContainerStyles = createUseStyles({
  container: {
    display:  ({ display }: Partial<CardElementStoryContainerProps>) => display || "flex",
    flexDirection: ({ direction }: Partial<CardElementStoryContainerProps>) => direction,
    paddingInline: ({ paddingInline }: Partial<CardElementStoryContainerProps>) => paddingInline ? spacing[paddingInline] : 0,
    paddingBlock: ({ paddingBlock }: Partial<CardElementStoryContainerProps>) => paddingBlock ? spacing[paddingBlock] : 0,
    gap: ({ gap }: Partial<CardElementStoryContainerProps>) => gap ? spacing[gap] : 0,
    alignItems: ({ alignItems }: Partial<CardElementStoryContainerProps>) => alignItems || "start",
    justifyContent: ({ justifyContent }: Partial<CardElementStoryContainerProps>) => justifyContent || "start",
    width:({ width }: Partial<CardElementStoryContainerProps>) => width || "-webkit-fill-available",
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