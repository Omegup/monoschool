import React, { forwardRef } from 'react';
import { useAvatarImageStyles, useAvatarStyles } from './Avatar.style';
import { AvatarImageProps, AvatarProps } from './Avatar.type';

export const Avatar = forwardRef(
  (props: AvatarProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, onClick, ...styling } = props;
    const classes = useAvatarStyles(styling);
    return (
      <div ref={ref} {...{ onClick }} className={classes.mainContainer}>
        {children}
      </div>
    );
  }
);

export const AvatarImage = forwardRef(
  (props: AvatarImageProps, ref: React.Ref<HTMLImageElement>) => {
    const { src } = props;
    const classes = useAvatarImageStyles();
    return <img className={classes.image} ref={ref} src={src} />;
  }
);
