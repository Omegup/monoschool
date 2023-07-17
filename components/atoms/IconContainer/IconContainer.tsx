import { forwardRef } from 'react';
import { useIconContainerStyles } from './IconContainer.style';
import { ControlledIconContainerProps } from './IconContainer.type';
import { Icon } from '../Icon';
import { widths } from '@omegup-school/ui-configs/sizes';
import { colorsStyles } from '@omegup-school/ui-configs/colors';

export const IconContainer = forwardRef(
  (props: ControlledIconContainerProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      icon,
      rotation,
      onClick,
      paddingBlock,
      paddingInline,
      height = 'svg',
      width = 'svg',
      color = 'dark_default',
    } = props;
    const classes = useIconContainerStyles({
      rotation,
      paddingBlock,
      paddingInline,
    });

    return (
      <div ref={ref} className={classes.mainContainer} {...{ onClick }}>
        {icon !== undefined ? (
          <Icon
            name={icon}
            color={colorsStyles[color]}
            height={widths.icon[height]}
            width={widths.icon[width]}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
);
