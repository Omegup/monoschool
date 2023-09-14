import { forwardRef } from 'react';
import { DashboardDetailedCardProps } from './DashboardDetailedCard.type';
import {
  Container,
  DisplaySwitcherOnHoverEffect,
  IconContainer,
  Text,
} from '@omegup-school/ui-atoms';
import { colorsStyles } from '@omegup-school/ui-configs/colors';

const variants: {
  [k in DashboardDetailedCardProps['variant']]: {
    title: keyof typeof colorsStyles;
    subTitle: keyof typeof colorsStyles;
    description: keyof typeof colorsStyles;
    bg: keyof typeof colorsStyles;
  };
} = {
  danger: {
    title: 'pink_700',
    description: 'dark_default',
    subTitle: 'pink_500',
    bg: 'pink_100',
  },
  info: {
    title: 'blue_700',
    description: 'headline_500',
    subTitle: 'blue_500',
    bg: 'light_500',
  },
  standart: {
    title: 'secondary_900',
    description: 'dark_default',
    subTitle: 'secondary_900',
    bg: 'secondary_100',
  },
};
export const DashboardDetailedCard = forwardRef(
  (props: DashboardDetailedCardProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      variant,
      title,
      description,
      subTitle,
      footerTitle,
      date,
      address,
      hoverIcon,
      hoverText,
      hovrable,
    } = props;

    return (
      <DisplaySwitcherOnHoverEffect
        height={263}
        width={205}
        hovrable={hovrable}
      >
        <Container
          ref={ref}
          direction="column"
          paddingBlock="s5"
          paddingInline="s5"
          gap="s2"
          bg={variants[variant].bg}
          borderRadius="r5"
          boxSizing="border-box"
        >
          <Text
            text={title}
            variant="paragraph_medium_semiBold"
            color={variants[variant].title}
          />
          <Container direction="column">
            <Text
              text={subTitle}
              variant="paragraph_medium_medium"
              color={variants[variant].subTitle}
            />
            <Container maxHeight={72} height={72}>
              <Text
                text={description}
                lineHeight="medium"
                variant="paragraph_xSmall_regular"
                color={variants[variant].description}
                ellipsis={3}
              />
            </Container>
          </Container>
          <Container gap="s2" direction="column">
            <Text
              text={footerTitle}
              variant="paragraph_medium_medium"
              color={variants[variant].subTitle}
            />
            <Container direction="column">
              <Container
                gap="s5"
                paddingBlock="s5"
                justifyContent="center"
                alignItems="center"
              >
                <IconContainer
                  name="CalendarCircle"
                  color={variants[variant].description}
                />
                <Text
                  text={date}
                  variant="paragraph_xSmall_regular"
                  color={variants[variant].description}
                />
              </Container>
              <Container
                gap="s5"
                paddingBlock="s5"
                justifyContent="center"
                alignItems="center"
              >
                <IconContainer
                  name="Map"
                  color={variants[variant].description}
                />
                <Text
                  text={address}
                  variant="paragraph_xSmall_regular"
                  color={variants[variant].description}
                />
              </Container>
            </Container>
          </Container>
        </Container>
        <Container
          justifyContent="center"
          alignItems="center"
          height={'100%'}
          width={'100%'}
          gap="s8"
          borderRadius="r5"
          boxSizing="border-box"
          bg={variants[variant].bg}
        >
          <Container
            direction="column"
            alignItems="center"
            justifyContent="center"
            width={93}
            gap="s8"
            textAlign="center"
          >
            <IconContainer
              color={variants[variant].subTitle}
              name={hoverIcon}
              width="largeSvg"
              height="largeSvg"
            />
            <Text
              text={hoverText || ''}
              variant="paragraph_medium_medium"
              color={variants[variant].subTitle}
            />
          </Container>
        </Container>
      </DisplaySwitcherOnHoverEffect>
    );
  }
);
