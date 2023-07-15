import { Container } from "@omegup-school/ui-atoms/Container";
import { forwardRef } from "react";
import { CardPrimaryText, CardSecondaryText, } from "../internal";
import { ElementCardTaxTagsProps } from "./ElementCardDateTags.types";
import { TagToggle } from "@omegup-school/ui-atoms";

export const ElementCardDateTags = forwardRef((
  props: ElementCardTaxTagsProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { type, label, date, ...styling } = props

  return (
    <Container justifyContent="space-between" ref={ref}>
      <CardSecondaryText text={date} />
      <Container
        alignItems="flex-start"
        paddingInline="s5"
        display="inline-flex"
        width="-webkit-fill-available"
      >
        <TagToggle type={type} label={label} />
      </Container>
    </Container>
  )
})