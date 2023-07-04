import { JssStyle } from 'jss';
import {
  DEFAULT_CHECKBOX_EVENTS_SELECTORS,
  CHECKBOX_SIZES,
  CHECKBOX_VARIANTS,
} from './NakedCheckBox.constants';

export type CheckboxVariant = (typeof CHECKBOX_VARIANTS)[number];
export type CheckboxSize = (typeof CHECKBOX_SIZES)[number];

export type CheckboxEventsSelectors = typeof DEFAULT_CHECKBOX_EVENTS_SELECTORS;

export type CheckBoxEvents = keyof CheckboxEventsSelectors;

export type CheckboxSelectors = ReturnType<ValueOf<CheckboxEventsSelectors>>;

export type CheckboxStyleVariables = {
  outlineColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
};

export type CheckboxVariantTheme = {
  [Event in CheckBoxEvents]: CheckboxStyleVariables;
};

export type CheckboxInitialVariantTheme = {
  initialContainerStyles: CheckboxStyleVariables;
};

export type CheckboxTheme = {
  [Variant in CheckboxVariant]: Partial<
    CheckboxInitialVariantTheme & CheckboxVariantTheme
  >;
};

export type CheckboxCommonVariantStyles = {
  [Selector in CheckboxSelectors]: JssStyle;
};

export interface NakedCheckboxProps {
  variant?: CheckboxVariant;
  size?: CheckboxSize;
}

export interface ControlledNakedCheckboxProps extends NakedCheckboxProps {
  checked: boolean;
  disabled: boolean;
  onChange: (value: boolean) => void;
  ref?: React.Ref<HTMLInputElement>;
  onBlur?: () => void;
}
