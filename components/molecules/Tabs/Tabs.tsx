import { Container, Tab, TabsArrow, TabsContainer } from '@omegup-school/ui-atoms';
import { TabsProps } from './Tabs.types';

export const Tabs = ({ tabs, onSelect, selected }: TabsProps) => {
  return (

    <TabsContainer>
      <Container gap='s8'>
        {tabs.map(({ label, Icon }, index) => (
          <Tab key={index} selected={index === selected} label={label} Icon={Icon} />
        ))}
      </Container>
      <TabsArrow action={(direction) => console.log(direction)} />
    </TabsContainer>

  )
}
