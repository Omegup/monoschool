
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
     {viewMode !== 'mobile' &&  <Text text={title} ref={ref} variant="heading_h4_bold" />
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
      // <div ref={ref} className={`${classes.container}  ${classes[size]} `}>
      //   {viewMode !== 'mobile' && <label
      //     tabIndex={-1}
      //     className={`${classes.parentName}`}>
      //     {parentName}
      //   </label>}
      //   <div className={`${classes.itemsList}  `} >

      //     {items.map((ch, index) =>
      //       <ChildMenu
      //         key={index}
      //         onChange={(e) => { ch.selected = true }}
      //         onBlur={() => { }}
      //         size={size}
      //         icon={ch.icon}
      //         label={ch.label}
      //         id={ch.id}
      //         selected={ch.selected}
      //         isCollopsed={isCollopsed}
      //       />
      //     )
      //     }
      //   </div>

      // </div>
    );
  }
);
