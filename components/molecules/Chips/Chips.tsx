import { ChipsButton, ChipsContainer,Text } from '@omegup-school/ui-atoms';
import { ControlledChipsProps } from './Chips.types';
import { TextProps } from '@omegup-school/ui-atoms/Text/Text.types';

export const Chips = ({ secondIcon,label,onClear,size ,...rest }: ControlledChipsProps) => {
  
  const variant={small:"paragraph_xSmall_regular",medium:"paragraph_small_regular",large:"paragraph_medium_regular"} satisfies {[k in 'small'|'medium'|'large']:TextProps['variant']}
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
