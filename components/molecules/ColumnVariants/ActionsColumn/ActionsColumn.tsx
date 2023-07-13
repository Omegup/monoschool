
import { Container } from "@omegup-school/ui-atoms"
import { ActionsColumnProps } from "./ActionsColumn.types"

export const ActionsColumn = ({
  actions,
}: ActionsColumnProps) => {
  return (
    <Container paddingBlock="s7" paddingInline="s7" gap="s3">
      {actions.map(({ icon, callBackFn, rowId }, index) => icon)}
    </Container>
  )
}
