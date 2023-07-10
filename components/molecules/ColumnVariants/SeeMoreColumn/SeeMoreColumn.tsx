import { Container, Link } from "@omegup-school/ui-atoms"
import { ControlledSeeMoreColumnProps } from "./SeeMoreColumn.types"

//TODO : remove fragments after Container typing  is fixed


export const SeeMoreColumn = ({ text, onClick }: ControlledSeeMoreColumnProps) => {
  return (
    <Container onClick={onClick} paddingBlock="s7" paddingInline="s7">
      <Link text={text} />
      <></>
    </Container>
  )
}
