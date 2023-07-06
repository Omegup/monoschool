
import { useSelectStyles } from './SubMenu.styles';
import { ControlledSubMenuProps } from './SubMenu.types';
 import{forwardRef} from "react"
import { ChildMenu, Container } from '@omegup-school/ui-atoms';


export const SubMenu = forwardRef(
  (props: ControlledSubMenuProps,
    ref: React.Ref<HTMLDivElement>) => {
    const {  parentName, items, onClick , viewMode, isCollopsed } = props;
    const classes = useSelectStyles()
  
    const vieModeClassContainer = classes[viewMode == 'mobile' ? 'mobile' : 'container']

    return (
      <Container
      ref={ref}
      direction="column"
    >
       {
       items.map((ch, index) =>
            <ChildMenu
              key={index}
              onChange={(e) => { ch.selected = true }}
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
