import { createUseStyles } from "react-jss";
import { spacing } from "@omegup-school/ui-configs/sizes";
import { Avatar } from "@omegup-school/ui-assets";
import { colors } from "@omegup-school/ui-configs/colors";
import { StoryElementContainerProps } from "./StoryElementContainer.types";

export const useStoryElementContainerStyles = createUseStyles({
  container: {
    display: ({ display }: Partial<StoryElementContainerProps>) => display || "flex",
    flexDirection: ({ direction }: Partial<StoryElementContainerProps>) => direction,
    paddingInline: ({ paddingInline }: Partial<StoryElementContainerProps>) => paddingInline ? spacing[paddingInline] : 0,
    paddingBlock: ({ paddingBlock }: Partial<StoryElementContainerProps>) => paddingBlock ? spacing[paddingBlock] : 0,
    gap: ({ gap }: Partial<StoryElementContainerProps>) => gap ? spacing[gap] : 0,
    alignItems: ({ alignItems }: Partial<StoryElementContainerProps>) => alignItems || "start",
    justifyContent: ({ justifyContent }: Partial<StoryElementContainerProps>) => justifyContent || "start",
 

    '&:hover ': {
      '&> $avatar': {

        borderRadius: "70px",
       border: "5px solid ",
       borderColor:colors.blue[500],
      background: "url(<path-to-image>), lightgray 50% / cover no-repeat",
      },
      '&> $text': {
        color: colors.dark["default"],
        textAlign: "center"

      }
    }
  }
  ,
  avatar: {

    display: 'flex',
    borderRadius: '50%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    width: "70px",
    height: "70px",
    border: "5px solid transparent",
    backgroundColor:colors.danger[500]
 
},
  text: {
  color: colors.grey[500], 
  textAlign: "center"
}
  })