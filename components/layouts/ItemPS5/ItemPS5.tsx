import { forwardRef } from "react";
import { ControlledItemPS5Props } from "./ItemPS5.types";
import { Container } from "@omegup-school/ui-molecules";

export const ItemPS5 = forwardRef((
  props: ControlledItemPS5Props,
  ref: React.Ref<HTMLDivElement>
) => {

  const { item, } = props

  return (
    <Container
      ref={ref}
      paddingBlock={'s5'}
      paddingInline={'s5'}
      children={[
        item
      ]}
    />
  )
})