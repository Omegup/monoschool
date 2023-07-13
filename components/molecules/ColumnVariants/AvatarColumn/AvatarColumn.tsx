import { Container, Text } from "@omegup-school/ui-atoms"
import { forwardRef } from "react"
import { AvatarColumnProps } from "./AvatarColumn.types"

export const AvatarColumn = forwardRef((
  { avatar, text }: AvatarColumnProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  return <Container ref={ref} gap='s5' paddingBlock="s5" paddingInline="s5" alignItems="center" >
    {avatar}
    <Text ref={ref} text={text} variant="paragraph_xSmall_regular" />
  </Container>
})
