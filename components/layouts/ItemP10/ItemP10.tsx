import { forwardRef } from "react";
import { ControlledItemP10Props } from "./ItemP10.types";
import { Container } from "@omegup-school/ui-molecules";

export const ItemP10 = forwardRef((
  props: ControlledItemP10Props,
  ref: React.Ref<HTMLDivElement>
) => {

  const { item, } = props

  return (
    <Container
      ref={ref}
      paddingBlock={10}
      paddingInline={10}
      children={[
        item
      ]}
    />
  )
})