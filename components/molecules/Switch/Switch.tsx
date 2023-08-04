import { Container, SwitchNative } from '@omegup-school/ui-atoms';
import { SwitchProps } from './switch.types';

export const Switch = ({checked , onChange} : SwitchProps) => {
  return (
    <Container>
      <SwitchNative checked={checked} onChange={() => onChange(checked)}/>
    </Container>
  );
};
