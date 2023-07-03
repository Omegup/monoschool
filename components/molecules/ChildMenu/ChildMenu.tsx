import { Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './ChildMenu.styles';
import { ControlledChildMenuProps } from './ChildMenu.types';
import { Children, forwardRef } from 'react';
import { colors } from '@omegup-school/ui-atoms/colors';


export const ChildMenu = forwardRef(
  (props: ControlledChildMenuProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, disabled, icon, isCollopsed, id, label, onChange, value, onBlur, selected, viewMode } = props;
    const classes = useSelectStyles(),
      disabledClass = classes[disabled ? 'disabled' : 'enabled'];
    const selectedClass = classes[selected ? 'selected' : 'notSelected'];
    const vieModeClassContainer = classes[viewMode == 'mobile' ? 'mobile' : viewMode == 'tablette' ? 'tablette' : 'container']
    const vieModeClassLabel = classes[viewMode == 'mobile' ? 'mobileLabel' : viewMode == 'tablette' ? 'tabletteLabel' : 'label']
    const vieModeClassIcon = classes[viewMode == 'mobile' ? 'mobileIcon' : viewMode == 'tablette' ? 'tabletteIcon' : 'icon']
    return (
      <div className={`${vieModeClassContainer} ${selectedClass}
      `}
      >
        <div className={`${vieModeClassIcon} ${selectedClass}`} >
          {icon}
        </div>
        {!isCollopsed && <div className={`${vieModeClassLabel} ${selectedClass}`}> 
          <label >
          {label}
        </label>
        </div>
        }

      </div>
    );
  }
);
