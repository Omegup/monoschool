import { Container, Tab, TabsArrow, TabsContainer } from '@omegup-school/ui-atoms';
import { TabsProps } from './Tabs.types';

export const Tabs = ({ tabs, onSelect, selected }: TabsProps) => {
  return (

    <TabsContainer>
      <Container>
        {tabs.map(({ label, Icon }, index) => (
          <Tab selected={index === selected} label={label} Icon={Icon} />
        ))}
      </Container>
      <TabsArrow action={(direction) => console.log(direction)} />
    </TabsContainer>

  )
}
