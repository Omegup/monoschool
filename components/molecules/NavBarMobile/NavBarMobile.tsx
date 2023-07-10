import { Square, Tick } from '@omegup-school/ui-assets';
// import { useNavBarMobileStyles } from './NavBarMobile.styles';
import { ControlledNavBarMobileProps } from './NavBarMobile.types';
import { forwardRef } from 'react';
import { ChildMenu } from '../../atoms/ChildMenu';
import { Container } from '@omegup-school/ui-atoms';
import { colors } from "@omegup-school/ui-configs/colors";


export const NavBarMobile = forwardRef(
  (props: ControlledNavBarMobileProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, onclick, items, onBlur } = props;
    // const classes = useNavBarMobileStyles();
    return (
      <Container
        ref={ref}
        direction="row"
        justifyContent="start"
        gap='s9'
        alignItems='start'
        backgroundColor={colors.blue[500]}

      >
        {
          items.map((ch, index) =>
            <ChildMenu
              key={index}
              onClick={(e) => { ch.selected = true }}
              onBlur={() => { }}
              size={'medium'}
              icon={ch.icon}
              label={ch.label}
              selected={ch.selected}
              viewMode={"mobile"}
            />
          )}
      </Container>

    );
  }
);