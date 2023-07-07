import { Container, Text } from "@omegup-school/ui-atoms"

export const TextColumn = ({ text, isSummaryColumn = false }: { text: string, isSummaryColumn?: boolean }) => {
  return (
    <Container paddingBlock="s5" paddingInline="s5">
      <Text text={text} variant={isSummaryColumn ? "paragraph_xSmall_medium" : "paragraph_xSmall_regular"} />
    </Container>
  )
}
