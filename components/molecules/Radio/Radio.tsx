import { Container, LabelRadio } from '@omegup-school/ui-atoms';
import { RadioProps } from './Radio.types';

export const Radio = ({ name, variant, size, checked, disabled,label }: RadioProps) => {

  return (
    <Container>
      <Radio checked={checked} name={name} onCheck={() => console.log('test')} size={size} variant={variant} disabled={disabled}/>
      <LabelRadio label={label}/>
    </Container>
  );
}