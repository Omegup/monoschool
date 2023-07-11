import { Container, TagToggle } from '@omegup-school/ui-atoms'
import { TagProps } from './Tag.types'

export const Tag = ({type,label}:TagProps) => {
  return (
    <Container >
      <TagToggle type={type} label={label}/>
    </Container>
  )
}
