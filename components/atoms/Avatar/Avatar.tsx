import { forwardRef } from 'react';
import {
  useAvatarImageStyles,
  useAvatarStyles,
  useDashboardTaskAvatarStyles,
} from './Avatar.style';
import { AvatarImageProps, AvatarProps } from './Avatar.type';
import { joinClassNames } from '@omegup-school/ui-configs/typography';

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

export const DashboardTaskAvatar = forwardRef(
  (props: AvatarProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, onClick, selected, ...styling } = props;
    const classes = useDashboardTaskAvatarStyles(styling);

    return (
      <div
        ref={ref}
        {...{ onClick }}
        className={joinClassNames(
          classes.mainContainer,
          selected ? classes.selected : ''
        )}
      >
        {children}
      </div>
    );
  }
);
