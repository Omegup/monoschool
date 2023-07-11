import { Container, TabBadge, TabContainer, TabLabel } from '@omegup-school/ui-atoms';
import { TabSearchProps } from './TabSearch.types';

export const TabSearch = ({
  selectedIndex,
  setSelectedIndex,
  tabProps,
}: TabSearchProps) => {

  return (
    <Container>
      {
        tabProps.map(({ label, badge }, index) => (
          <TabContainer selected={index === selectedIndex} key={index} onClick={() => setSelectedIndex(index)}>
            <TabLabel label={label} selected={index === selectedIndex} />
            <TabBadge badge={badge} selected={index === selectedIndex} />
          </TabContainer>
        ))
      }
    </Container>
  );
};
