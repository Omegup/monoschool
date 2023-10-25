import { InteractiveStates } from './InteractiveStyles.types';

export type CheckboxStatus = 'checked' | 'unchecked';

export type SelectableOptionVariant =
  | 'solid'
  | 'border'
  | 'scale'
  | 'cell'
  | 'select';
export type SelectableOptionSize = 'small' | 'medium' | 'large';
export type SelectableOptionType = 'checkbox' | 'radio';

export type SelectableOptionStateTheme = {
  checkbox: {
    checkboxOutlineColor?: string;
    checkboxBorderColor?: string;
    checkboxBackgroundColor?: string;
    tickColor?: string;
    checkboxOpacity?: number;
  };
  radio: {
    outlineColor?:  string ; 
    containerColor?: string;
    containerWidth?: string;
    outsideCircleColor?: string;
    outsideCircleWidth?: string;
    insideCircleColor?: string;
    insideCircleWidth?: string;
  };
};

export type SelectableOptionVariantTheme = {
  [Status in CheckboxStatus]: {
    [Interaction in InteractiveStates]: SelectableOptionStateTheme;
  };
};

export type SelectableOptionTheme = {
  [Variant in SelectableOptionVariant]: SelectableOptionVariantTheme;
};
