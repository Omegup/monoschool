export type InteractiveStates =
  | 'normal'
  | 'focused'
  | 'hovered'
  | 'focusedAndHovered'
  | 'pressed';

export type Interaction = {
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
};

export type InteractionMap = Record<InteractiveStates, Interaction[]>;
