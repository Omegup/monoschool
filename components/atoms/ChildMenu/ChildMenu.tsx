import { joinClassNames } from '@omegup-school/ui-configs/typography';
import { Button } from '../Button';
import { useChildMenutStyles } from './ChildMenu.styles';
import { ControlledChildMenuProps } from './ChildMenu.types';
import { Children, forwardRef } from 'react';
 
export const ChildMenu = forwardRef(
  (props: ControlledChildMenuProps,
    ref: React.Ref<HTMLDivElement>) => {
    const { size, icon, isCollopsed,  label, onClick, onBlur, selected, viewMode } = props;
    const classes = useChildMenutStyles();
    const selectedClasse = classes[selected ? 'selected' : 'notSelected'];
    const collopsedCalsse = classes[isCollopsed ? 'collopsed' : 'container'];
    const vieModeClassContainer = classes[viewMode == 'mobile' ? 'mobile' : 'container']
    const vieModeClassLabel = classes[viewMode == 'mobile' ? 'mobileLabel' : 'label']
    const vieModeClassIcon = classes[viewMode == 'mobile' ? 'mobileIcon' : 'icon']
    return (
      <div ref={ref} className={joinClassNames(vieModeClassContainer,selectedClasse,classes[size],collopsedCalsse) }>
        <div className={`${vieModeClassIcon} `} >
          {icon}
        </div>
        {!isCollopsed &&
          <div className={`${vieModeClassLabel} `}>
            <label >
              {label}
            </label>
            {/* <Button label={label} /> */}
          </div>
        }
      </div>
    );
  }
);
