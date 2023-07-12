import { forwardRef } from 'react';
import { useAvatarStyles } from './Avatar.style';
import { controlledAvatarProps } from './Avatar.type';

export const Avatar = forwardRef(
  (props: controlledAvatarProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, src, onClick, ...styling } = props;
    const classes = useAvatarStyles(styling);

    return (
      <div ref={ref} {...{ onClick }} className={classes.mainContainer}>
        {src ? <img className={classes.image} src={src} /> : children}
      </div>
    );
  }
);
