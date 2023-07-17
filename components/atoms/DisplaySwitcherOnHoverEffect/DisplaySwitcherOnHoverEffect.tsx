import { forwardRef } from 'react';
import { DisplaySwitcherOnHoverEffectProps } from './DisplaySwitcherOnHoverEffect.type';
import { useDisplaySwitcherOnHoverEffectStyle } from './DisplaySwitcherOnHoverEffect.style';

export const DisplaySwitcherOnHoverEffect = forwardRef(
  (
    props: DisplaySwitcherOnHoverEffectProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const { children, hovrable=true, ...styling } = props;
    const classes = useDisplaySwitcherOnHoverEffectStyle(styling);
    return (
      <div ref={ref} className={classes.mainContainer}>
        <div className={hovrable ? classes.unhovered : ''}>
          {props.children[0]}
        </div>
        {hovrable ? (
          <div className={classes.hovered}>{props.children[1]}</div>
        ) : (
          <></>
        )}
      </div>
    );
  }
);
