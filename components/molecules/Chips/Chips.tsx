import { ChipsButton, ChipsContainer,Text } from '@omegup-school/ui-atoms';
import { ControlledChipsProps } from './Chips.types';

export const Chips = ({ secondIcon,label,onClear,size ,...rest }: ControlledChipsProps) => {
  
  const variant={small:"paragraph_xSmall_regular",medium:"paragraph_small_regular",large:"paragraph_medium_regular"}
  return (
    <ChipsContainer
    {...rest}
    size={size}
    >
    <Text variant={variant[size]} text={label}/>
    <ChipsButton onClear={onClear} size={size} icon={secondIcon}/>
    </ChipsContainer>
  );
};
