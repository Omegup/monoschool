import {  forwardRef } from "react";
import { ControlledHeadListeButtonProps } from "./HeadListeButton.types";
import { Container } from "@omegup-school/ui-atoms";


export const HeadListeButton = forwardRef((
  props: ControlledHeadListeButtonProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { children} = props

  return (
    <Container
    ref={ref}
    direction="row"
    paddingInline={'s5'}
    alignItems="center"
    gap={"s5"}
  >
  {children}
  </Container>
      
   
  )
})