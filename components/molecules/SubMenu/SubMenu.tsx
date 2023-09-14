
// import { useSelectStyles } from './SubMenu.styles';
import { ControlledSubMenuProps } from './SubMenu.types';
import { forwardRef } from "react"
import { ChildMenu, Container, Text } from '@omegup-school/ui-atoms';


export const SubMenu = forwardRef(
  (props: ControlledSubMenuProps,
    ref: React.Ref<HTMLDivElement>) => {
    const { title, items, onClick, viewMode, isCollapsed } = props;

    return (
      <Container
        {...{ onClick, ref }}
        direction="column"
        justifyContent="start"
        gap='s2'
        alignItems='start'
      >
        {viewMode !== 'mobile' && !isCollapsed &&
          <Container
            ref={ref}
            paddingInline='s5'
            alignItems='start'
          >
            <Text text={title} ref={ref}
              variant="paragraph_xSmall_bold"
              color="grey_300" />
          </Container>}
        {
          items.map(({ isSelected, label, icon, onClick, onBlur, size }, key) =>
            <ChildMenu {...{ onClick, onBlur, key, size, icon, label, isSelected, isCollapsed }} />
          )}
      </Container>

    );
  }
);
