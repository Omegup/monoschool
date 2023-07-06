import { JssStyle } from 'jss';
import {
  CHECKBOX_SIZES,
  CHECKBOX_VARIANTS
} from './NakedCheckBox.constants';

export type CheckboxVariant = (typeof CHECKBOX_VARIANTS)[number];
export type CheckboxSize = (typeof CHECKBOX_SIZES)[number];
export type CheckboxStatus = 'checked' | 'notChecked';
export type CheckboxInteractionStatus = {
  isHovered: boolean;
  isMouseDown: boolean;
  isFocused: boolean;
};
export type CheckboxInteractionsStyles =
  | 'focused'
  | 'hovered'
  | 'focusedAndHovered'
  | 'pressed';

export type CheckboxStyleVariables = {
  outlineColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
};

export type CheckboxStylesTheme = {
  [InteractionStyle in CheckboxInteractionsStyles]: CheckboxStyleVariables;
};
export type CheckboxVariantTheme = {
  [Status in CheckboxStatus]: CheckboxStylesTheme;
};

export type CheckboxInitialVariantTheme = {
  normal: {
    [Status in CheckboxStatus]: CheckboxStyleVariables;
  };
};


export type CheckboxStyles = {
  [Variant in Partial<CheckboxVariant>]: CheckboxInitialVariantTheme &
    Partial<CheckboxVariantTheme>;
};

export type CheckboxCommonVariantStyles = {
  [Selector : string]: JssStyle;
};

export interface NakedCheckboxProps {
  variant?: CheckboxVariant;
  size?: CheckboxSize;
}

export type CheckBoxVariantStylesBuilder = {
  interactionStatus: CheckboxInteractionStatus;
  style: CheckboxInteractionsStyles;
};

export interface ControlledNakedCheckboxProps extends NakedCheckboxProps {
  checked: boolean;
  disabled: boolean;
  onChange: (value: boolean) => void;
  ref?: React.Ref<HTMLInputElement>;
  onBlur?: () => void;
}
