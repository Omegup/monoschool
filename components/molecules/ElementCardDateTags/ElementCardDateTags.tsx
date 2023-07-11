import { Container } from "@omegup-school/ui-atoms/Container";
import { forwardRef } from "react";
import { CardPrimaryText, CardSecondaryText, TagContainer } from "../internal";
 import { ElementCardTaxTagsProps } from "./ElementCardDateTags.types";

export const ElementCardDateTags = forwardRef((
  props: ElementCardTaxTagsProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { status,text,date, ...styling } = props
 
  return (
    <Container justifyContent="space-between"  ref={ref}>
    <CardSecondaryText text={date}/>
    <TagContainer status={status}text={text}/>
    </Container>
  )
})