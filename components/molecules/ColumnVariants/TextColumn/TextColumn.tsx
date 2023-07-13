import { Container, Text } from "@omegup-school/ui-atoms"
import { TextColumnProps } from "./TextColumn.types"

export const TextColumn = ({ text, isSummaryColumn = false}: TextColumnProps) => {
  return (
    <Container paddingBlock="s5" paddingInline="s5">
      <Text text={text} variant={isSummaryColumn ? "paragraph_xSmall_medium" : "paragraph_xSmall_regular"} />
    </Container>
  )
}
