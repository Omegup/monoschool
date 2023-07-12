
// import { useSelectStyles } from './SubMenu.styles';
import { ControlledSubMenuProps } from './SubMenu.types';
 import{forwardRef} from "react"
import { ChildMenu, Container, Text } from '@omegup-school/ui-atoms';
 

export const SubMenu = forwardRef(
  (props: ControlledSubMenuProps,
    ref: React.Ref<HTMLDivElement>) => {
    const {  title, items, onClick , viewMode, isCollopsed } = props;
    
    return (
      <Container
      ref={ref}
      direction="column"
      justifyContent="start"
      gap='s5'
      alignItems='start'

    >
     {viewMode !== 'mobile' &&  
     <Text text={title} ref={ref}
      variant="paragraph_xSmall_bold"
        letterSpacing='0.12px' 
       lineHeigt='normal'
      textTransform='uppercase'
      color="#B9CAD7"/>
      }
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
              isCollopsed={isCollopsed}
            />
  )  }
     </Container>
     
    );
  }
);
