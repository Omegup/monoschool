import { LabeledCheckBox } from "@omegup-school/ui-atoms/LabeledCheckBox"
import { ControlledCheckboxColumnProps } from "./SelectColumn.types"
import { Container, NakedCheckBox } from "@omegup-school/ui-atoms"

export const SelectColumn = ({ checked, disabled, label, onBlur, onChange }: ControlledCheckboxColumnProps) => {
  return (
    <Container paddingBlock="s7" paddingInline="s7">
      <LabeledCheckBox {...{ checked, label }}>
        <NakedCheckBox variant="cell" size="medium"  {...{ checked, disabled, onBlur, onChange }} />
      </LabeledCheckBox>
    </Container>
  )
}
