import { Container, TagToggle } from '@omegup-school/ui-atoms'
import { TagProps } from './Tag.types'

export const Tag = (type:TagProps) => {
  console.log(type.type)
  return (
    <Container >
      <TagToggle type={type.type} />
    </Container>
  )
}
