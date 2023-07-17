import { forwardRef } from 'react';
import { useIconContainerStyles } from './IconContainer.style';
import { ControlledIconContainerProps } from './IconContainer.type';

export const IconContainer = forwardRef(
  (props: ControlledIconContainerProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, rotation, onClick, paddingBlock, paddingInline,bg,borderRadius } = props;
    const classes = useIconContainerStyles({
      rotation,
      paddingBlock,
      paddingInline,
      bg,
      borderRadius
    });

    return (
      <div ref={ref} className={classes.mainContainer} {...{ onClick }}>
        {children}
      </div>
    );
  }
);
