import { Container, Link } from "@omegup-school/ui-atoms"
import { ControlledSeeMoreColumnProps } from "./SeeMoreColumn.types"

export const SeeMoreColumn = ({ text, onClick }: ControlledSeeMoreColumnProps) => {
  return (
    <Container onClick={onClick} paddingBlock="s7" paddingInline="s7">
      <Link text={text} />
    </Container>
  )
}
