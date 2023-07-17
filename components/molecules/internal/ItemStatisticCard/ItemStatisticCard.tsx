import { forwardRef } from 'react';
import { ControlledItemStatisticCardProps } from './ItemStatisticCard.types';
import { Container, NakedButton, Text } from '@omegup-school/ui-atoms';
import { colors } from '@omegup-school/ui-configs/colors';

export const ItemStatisticCard = forwardRef(
  (props: ControlledItemStatisticCardProps, ref: React.Ref<HTMLDivElement>) => {
    const { icon, label, variant, amount, percentage } = props;
    const color = {
      success: {
        bg: 'success_500',
        color: 'success_900',
        colorbutton: 'success_700',
        bgButton: 'success_200',
      },
      blue: {
        bg: 'blue_500',
        color: 'blue_900',
        colorbutton: 'blue_700',
        bgButton: 'headline_200',
      },
      warning: {
        bg: 'warning_300',
        color: 'warning_900',
        colorbutton: 'warning_100',
        bgButton: 'warning_500',
      },
      pink: {
        bg: 'pink_500',
        color: 'pink_900',
        colorbutton: 'pink_700',
        bgButton: 'pink_200',
      },
    };
    return (
      <Container
        ref={ref}
        direction={'column'}
        alignItems={'start'}
        paddingBlock={'s5'}
        gap={'s2'}
        paddingInline={'s5'}
        width={'100%'}
        bg={color[variant].bg}
        borderRadius={'r5'}
      >
        <Container ref={ref} width={'100%'} alignItems={'center'}>
          <NakedButton
            paddingBlock={'s5'}
            paddingInline={'s5'}
            startIcon={icon}
            color={color[variant].color}
            bg={color[variant].bgButton}
            borderRadius={'r5'}
          />
          <Text
            variant={'paragraph_medium_semiBold'}
            color={color[variant].color}
            text={label}
          />
        </Container>
        <Container
          ref={ref}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
          borderRadius={'r5'}
        >
          <Text
            variant={'paragraph_medium_semiBold'}
            color={color[variant].color}
            text={amount}
          />
          <NakedButton
            bg={color[variant].bgButton}
            borderRadius={'r5'}
            paddingBlock={'s5'}
            paddingInline={'s5'}
            textVariant="paragraph_small_regular"
            color={color[variant].colorbutton}
            text={`+ ${percentage}%`}
          />
        </Container>
      </Container>
    );
  }
);
