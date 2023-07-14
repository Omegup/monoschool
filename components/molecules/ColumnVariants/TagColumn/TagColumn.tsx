import { TagToggle } from "@omegup-school/ui-atoms"
import { TagColumnProps } from "./TagColumn.types"

export const TagColumn = ({ label, type }: TagColumnProps) => {
  return (
    <TagToggle
      {...{ label, type }}
    />
  )
}
