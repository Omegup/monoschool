import { InteractiveStates } from './InteractiveStyles.types';

export type CheckboxStatus = 'checked' | 'unchecked';

export type CheckboxVariant = 'solid' | 'border' | 'scale' | 'cell' | 'select';
export type CheckboxSize = 'small' | 'medium' | 'large' | 'xLarge';

export type CheckboxStateTheme = {
  checkboxOutlineColor?: string;
  checkboxBorderColor?: string;
  checkboxBackgroundColor?: string;
  tickColor?: string;
  checkboxOpacity?: number;
};


export type CheckboxVariantTheme = {
  [Status in CheckboxStatus]: {
    [Interaction in InteractiveStates]: CheckboxStateTheme;
  };
};

export type CheckboxTheme = {
  [Variant in CheckboxVariant]: CheckboxVariantTheme;
};
