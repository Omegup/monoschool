import { Square, Tick } from '@omegup-school/ui-assets';
import { useChildMenutStyles } from './ChildMenu.styles';
import { ControlledChildMenuProps } from './ChildMenu.types';
import { Children, forwardRef } from 'react';
import { colors } from '@omegup-school/ui-atoms/colors';


export const ChildMenu = forwardRef(
  (props: ControlledChildMenuProps,
    ref: React.Ref<HTMLDivElement>) => {
    const { size, disabled, icon, isCollopsed, id, label, onChange, onBlur, selected, viewMode } = props;
    const classes = useChildMenutStyles();
    const   disabledClass = classes[disabled ? 'disabled' : 'enabled'];
    const selectedClass = classes[selected ? 'selected' : 'notSelected'];
    const vieModeClassContainer = classes[viewMode == 'mobile' ? 'mobile' : 'container']
    const vieModeClassLabel = classes[viewMode == 'mobile' ? 'mobileLabel' : 'label']
    const vieModeClassIcon = classes[viewMode == 'mobile' ? 'mobileIcon' : 'icon']
    return (
      <div ref={ref} className={`${vieModeClassContainer} ${selectedClass}  ${classes[size]}  `}>
        <div className={`${vieModeClassIcon} `} >
          {icon}
        </div>
        {!isCollopsed &&
          <div className={`${vieModeClassLabel} `}>
            <label >
              {label}
            </label>
          </div>
        }
      </div>
    );
  }
);
