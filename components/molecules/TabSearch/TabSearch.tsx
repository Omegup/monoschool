
import { Container, TabBadge, TabContainer, TabLabel } from '@omegup-school/ui-atoms';
import { TabSearchProps } from './TabSearch.types';

export const TabSearch = ({
  selectedIndex,
  tabProps,
}: TabSearchProps) => {
  return (
    <Container>
      {
        tabProps.map(({ label, badge, onClick }, index) => (
          <TabContainer selected={index === selectedIndex} key={index} {...{ onClick }}>
            <TabLabel label={label} selected={index === selectedIndex} />
            <TabBadge badge={badge} selected={index === selectedIndex} />
          </TabContainer>
        ))
      }
    </Container>
  );
};