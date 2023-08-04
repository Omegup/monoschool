import { forwardRef } from 'react';
import { useIconContainerStyles } from './IconContainer.style';
import { ControlledIconContainerProps } from './IconContainer.type';
import * as icons from '@omegup-school/ui-assets/icons';
import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { widths } from '@omegup-school/ui-configs/sizes';

export const IconContainer = forwardRef(
  (props: ControlledIconContainerProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      name,
      rotation,
      onClick,
      paddingBlock,
      paddingInline,
      color = 'headline_500',
      height = 'svg',
      width = 'svg',
    } = props;
    const classes = useIconContainerStyles({
      rotation,
      paddingBlock,
      paddingInline,
      color,
      height,
      width,
    });
    const Icon = icons[name!];
    return (
      <div ref={ref} className={classes.mainContainer} {...{ onClick }}>
        {name !== undefined ? (
          <Icon
            {...{
              color: colorsStyles[color],
              width: widths.icon[width],
              height: widths.icon[height],
            }}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
);
