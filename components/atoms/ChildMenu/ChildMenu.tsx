import { joinClassNames } from '@omegup-school/ui-configs/typography';
import { forwardRef } from 'react';
import { useChildMenuStyles } from './ChildMenu.styles';
import { ControlledChildMenuProps } from './ChildMenu.types';

export const ChildMenu = forwardRef(
  (props: ControlledChildMenuProps,
    ref: React.Ref<HTMLDivElement>) => {
    const { size, icon, isCollapsed, label, onClick, onBlur, isSelected, viewMode } = props;
    const classes = useChildMenuStyles();
    const selectedClass = classes[isSelected ? 'selected' : 'notSelected'];
    const collapsedClass = classes[isCollapsed ? 'collapsed' : 'container'];
    const vieModeClassContainer = classes[viewMode == 'mobile' ? 'mobile' : 'container']
    const vieModeClassLabel = classes[viewMode == 'mobile' ? 'mobileLabel' : 'label']
    const vieModeClassIcon = classes[viewMode == 'mobile' ? 'mobileIcon' : 'icon']
    return (
      <div {...{ onBlur, onClick, ref }} className={joinClassNames(vieModeClassContainer, selectedClass, classes[size], collapsedClass)}>
        <div className={`${vieModeClassIcon} `} >
          {icon}
        </div>
        {!isCollapsed &&
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
