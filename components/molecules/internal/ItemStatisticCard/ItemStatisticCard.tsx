import { forwardRef } from 'react';
import { ControlledItemStatisticCardProps } from './ItemStatisticCard.types';
import { Container, NakedButton, Text } from '@omegup-school/ui-atoms';
import { colors } from '@omegup-school/ui-configs/colors';

export const ItemStatisticCard = forwardRef(
  (props: ControlledItemStatisticCardProps, ref: React.Ref<HTMLDivElement>) => {
    const { icon, label,variant, amount, percentage } = props;
    const color={
    success:{bg:"success_500",color:colors.success[900],colorbutton:colors.success[700],bgButton:colors.success[200]},
    blue:{bg:colors.blue[500],color:colors.blue[900],colorbutton:colors.blue[700],bgButton:colors.headline[200]},
    warning:{bg:colors.warning[300],color:colors.warning[900],colorbutton:colors.warning[100],bgButton:colors.warning[500]},
    pink:{bg:colors.pink[500],color:colors.pink[900],colorbutton:colors.pink[700],bgButton:colors.pink[200]}}
    return (
      <Container
        ref={ref}
        direction={'column'}
        alignItems={'start'}
        paddingBlock={'s5'}
        gap={'s2'}
        paddingInline={'s5'}
        width={"100%"}
        bg={color[variant].bg}
        
      >
        <Container ref={ref}
        width={"100%"}
        alignItems={'center'}
        >
          <NakedButton paddingBlock={'s5'} paddingInline={'s5'} startIcon={icon} text={''}/>
          <Text variant={'paragraph_medium_semiBold'} text={label} />
        </Container>
        <Container
          ref={ref}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
        >
          <Text variant={'paragraph_medium_semiBold'} text={amount} />
          <NakedButton text={`+ ${percentage}%`}/>
        </Container>
      </Container>
    );
  }
);
