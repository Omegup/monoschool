import { forwardRef, useState } from 'react';
import { ControlledTaskItemProps } from './TaskItem.type';
import {
  checking,
  colors,
  hoverColors,
  useTaskItemStyles,
} from './TaskItem.style';
import { Tick } from '@omegup-school/ui-assets';
import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { joinClassNames } from '@omegup-school/ui-configs/typography';
import { widths } from '@omegup-school/ui-configs/sizes';

export const TaskItem = forwardRef(
  (props: ControlledTaskItemProps, ref: React.Ref<HTMLDivElement>) => {
    const { text, checked, onClick, finishedTaskText, ...styling } = props;
    const classes = useTaskItemStyles({ ...styling, checked });
    const [check, setCheck] = useState(false);
    return (
      <div
        {...{ ref }}
        className={joinClassNames(
          classes.taskContainer,
          check ? classes.check : ''
        )}
        onClick={() => {
          !checked && setCheck(true);
          onClick();
        }}
        onMouseLeave={() => setCheck(false)}
      >
        <div className={joinClassNames(classes.iconContainer)}>
          <div className={classes.unhovered}>
            {checked && (
              <Tick
                width={widths.icon.mediumSvg}
                height={widths.icon.mediumSvg}
                color={colorsStyles[colors[checking(checked)].icon]}
              />
            )}
          </div>
          <div className={classes.hovered}>
            {check ? (
              <Tick
                width={widths.icon.mediumSvg}
                height={widths.icon.mediumSvg}
                color={colorsStyles['success_500']}
              />
            ) : (
              <Tick
                width={widths.icon.mediumSvg}
                height={widths.icon.mediumSvg}
                color={colorsStyles[hoverColors[checking(checked)].icon]}
              />
            )}
          </div>
        </div>
        <span
          className={joinClassNames(
            classes.textContainer,
            checked && !check ? classes.checkedtext : ''
          )}
        >
          {check ? finishedTaskText : text}
        </span>
      </div>
    );
  }
);
