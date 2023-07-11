import { Container, Text } from "@omegup-school/ui-atoms"
import { IconColumnProps } from "./IconColumn.types"
import { forwardRef } from "react"

export const IconColumn = forwardRef((
  { icon, text }: IconColumnProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  return <Container ref={ref} gap='s5' paddingBlock="s5" paddingInline="s5"  alignItems="center">
    {icon}
    <Text ref={ref} text={text} variant="paragraph_xSmall_regular" />
  </Container>
})
