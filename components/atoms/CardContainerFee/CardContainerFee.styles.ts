import { createUseStyles } from "react-jss";
import { CardContainerFeeProps } from "./CardContainerFee.types";
import { spacing } from "@omegup-school/ui-configs/sizes";
import { colors } from "@omegup-school/ui-configs/colors";

export const useCardContainerFeeStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: ({ direction }: Partial<CardContainerFeeProps>) => direction,
    paddingBlock: ({ paddingBlock }: Partial<CardContainerFeeProps>) => paddingBlock ? spacing[paddingBlock] : 0,
    gap: ({ gap }: Partial<CardContainerFeeProps>) => gap ? spacing[gap] : 0,
    alignItems: ({ alignItems }: Partial<CardContainerFeeProps>) => alignItems || "start",
    justifyContent: ({ justifyContent }: Partial<CardContainerFeeProps>) => justifyContent || "start",
    paddingInline: ({ paddingInline }: Partial<CardContainerFeeProps>) => paddingInline ? spacing[paddingInline] : 0,
    background: colors.background["default"],
    '&:hover': {
      borderRadius: "10px",
      background: colors.light[100],
      cursor: "pointer"
    },
    borderRadius: "10px",
    border: "1px solid var(--background-overlay, #EBEBEB)",
    boxShadow:
      "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)"
  },
  avatarWithName: {
    display: "flex",
    alignItems: "center",
    paddingInline: ({ paddingInline }: Partial<CardContainerFeeProps>) => paddingInline ? spacing[paddingInline] : 0,
    paddingBlock: ({ paddingBlock }: Partial<CardContainerFeeProps>) => paddingBlock ? spacing[paddingBlock] : 0,
     width:"-webkit-fill-available"
    },

  doubleText: {
    display: "flex",
    alignItems: "flex-start",
      paddingInline: ({ paddingInline }: Partial<CardContainerFeeProps>) => paddingInline ? spacing[paddingInline] : 0,
      width:"-webkit-fill-available"
  },
  ElementCardWithDateTags: {
    display: "flex",
    alignItems: "flex-start",
    width:"-webkit-fill-available" }

})