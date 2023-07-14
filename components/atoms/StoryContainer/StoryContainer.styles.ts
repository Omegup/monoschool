import { createUseStyles } from "react-jss";
import { StoryContainerProps } from "./StoryContainer.types";
import { spacing } from "@omegup-school/ui-configs/sizes";

export const useStoryContainerStyles = createUseStyles({
  StoryContainer: {
    display:  ({ display }: Partial<StoryContainerProps>) => display || "flex",
    flexDirection: ({ direction }: Partial<StoryContainerProps>) => direction,
    paddingInline: ({ paddingInline }: Partial<StoryContainerProps>) => paddingInline ? spacing[paddingInline] : 0,
    paddingBlock: ({ paddingBlock }: Partial<StoryContainerProps>) => paddingBlock ? spacing[paddingBlock] : 0,
    gap: ({ gap }: Partial<StoryContainerProps>) => gap ? spacing[gap] : 0,
    alignItems: ({ alignItems }: Partial<StoryContainerProps>) => alignItems || "start",
    justifyContent: ({ justifyContent }: Partial<StoryContainerProps>) => justifyContent || "start",
    width:({ width }: Partial<StoryContainerProps>) => width || "-webkit-fill-available",
 }
})