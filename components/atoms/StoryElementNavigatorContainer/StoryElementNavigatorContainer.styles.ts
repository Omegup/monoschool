import { createUseStyles } from "react-jss";
import { StoryElementNavigatorContainerProps } from "./StoryElementNavigatorContainer.types";
import { spacing } from "@omegup-school/ui-configs/sizes";
import { Avatar } from "@omegup-school/ui-assets";
import { colors } from "@omegup-school/ui-configs/colors";
import { styles } from "../common/styles";

export const useStoryElementNavigatorContainerStyles = createUseStyles({
  container: {
    display: ({ display }: Partial<StoryElementNavigatorContainerProps>) => display || "flex",
    flexDirection: ({ direction }: Partial<StoryElementNavigatorContainerProps>) => direction,
    paddingInline: ({ paddingInline }: Partial<StoryElementNavigatorContainerProps>) => paddingInline ? spacing[paddingInline] : 0,
    paddingBlock: ({ paddingBlock }: Partial<StoryElementNavigatorContainerProps>) => paddingBlock ? spacing[paddingBlock] : 0,
    gap: ({ gap }: Partial<StoryElementNavigatorContainerProps>) => gap ? spacing[gap] : 0,
    alignItems: ({ alignItems }: Partial<StoryElementNavigatorContainerProps>) => alignItems || "start",
    justifyContent: ({ justifyContent }: Partial<StoryElementNavigatorContainerProps>) => justifyContent || "start",
    width: "70px",
    '&:hover ': {
      '&> $iconlight': {
        display: "none"
      },
      '&> $icondark': {
        display: 'flex',
      },
      '&> $text': {
        color: colors.dark["default"],
        textAlign: "center"

      }
    }
  }
  ,
  avatar: {
  },
  iconlight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icondark: {
    justifyContent: 'center',
    alignItems: 'center',
    display: "none"
  },

  text: {
    color: colors.grey[500],
    textAlign: "center"
  },
  ...styles,
  ...colors
}) 