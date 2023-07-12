import { Container, IconContainer, NakedButton } from '@omegup-school/ui-atoms';
import { CardIconedDetail } from '../internal/CardIconedDetail';
import { CardIconedinfo } from '../internal/CardIconedinfo';
import { forwardRef } from 'react';
import { FeeCardProps } from './FeeCard.type';
import {
  DocumentText,
  EmptyWalletTime,
  Money,
  More,
  People,
  RepeateMusic,
  Subtitle,
} from '@omegup-school/ui-assets';
import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { FeeCardShadow } from '@omegup-school/ui-configs/effects/shadow';

export const FeeCard = forwardRef(
  (props: FeeCardProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      feeName,
      amount,
      billableAmount,
      estimatedBillableAmount,
      recipients,
      recipientsNumber,
      type,
    } = props;

    return (
      <Container
        ref={ref}
        direction="column"
        gap="s5"
        paddingBlock="s5"
        paddingInline="s5"
        shadow={FeeCardShadow}
        bg={'light_100'}
        borderRadius={'r5'}
        width={300}
        height={330}
      >
        <Container width={'100%'} justifyContent="space-between">
          <CardIconedDetail
            icon={<Subtitle color={colorsStyles['blue_500']} />}
            text="Description"
            subText={feeName}
          />
          <IconContainer paddingInline="s5" rotation={90}>
            <More />
          </IconContainer>
        </Container>
        <CardIconedDetail
          icon={<Money color={colorsStyles['success_500']} />}
          text="Coûts"
          subText={amount}
        />
        <CardIconedDetail
          icon={<RepeateMusic color={colorsStyles['headline_500']} />}
          text="Occurrence"
          subText={type}
        />
        <CardIconedDetail
          icon={<People color={colorsStyles['blue_600']} />}
          text="Inscrits"
          subText={recipientsNumber}
        />
        <Container
          width={'100%'}
          paddingBlock="s5"
          justifyContent="space-between"
        >
          <CardIconedinfo
            icon={<DocumentText color={colorsStyles['headline_600']} />}
            text={billableAmount}
          />
          <CardIconedinfo
            icon={<EmptyWalletTime color={colorsStyles['grey_500']} />}
            text={estimatedBillableAmount}
          />
        </Container>
        <Container width="100%" justifyContent="space-between">
          <div></div> {/* TO Do replace with avatar Stacking Component*/}
          <NakedButton
            text="Voir plus"
            bg="blue_500"
            textVariant="paragraph_xSmall_regular"
            borderRadius="r6"
            paddingBlock="s5"
            paddingInline="s5"
            lineHeight="small"
            color="light_100"
            shadow={FeeCardShadow}
          />
        </Container>
      </Container>
    );
  }
);
