import { InteractionMap } from './InteractiveStyles.types';

export const INTERACTION_MAP: InteractionMap = {
  normal: [{}],
  focused: [
    {
      hover: false,
      active: false,
      focus: true,
    },
    {
      hover: false,
      active: true,
      focus: false,
    },
    {
      hover: false,
      active: true,
      focus: true,
    },
  ],
  hovered: [
    {
      hover: true,
      active: false,
      focus: false,
    },
  ],
  focusedAndHovered: [
    {
      hover: true,
      active: false,
      focus: true,
    },
  ],
  pressed: [
    {
      hover: true,
      active: true,
      focus: true,
    },
    {
      hover: true,
      active: true,
      focus: false,
    },
  ],
};
