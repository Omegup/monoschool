import { DEFAULT_CHECKBOX_EVENTS_SELECTORS } from './NakedCheckBox.constants';

export type CheckboxVariant = 'solid' | 'border' | 'scale';
export type CheckboxSize = 'large' | 'medium' | 'small';
export type CheckboxEvent =
  | 'focused'
  | 'hovered'
  | 'enabled'
  | 'hoveredOnEnable';

export type CheckboxEventsSelectors = typeof DEFAULT_CHECKBOX_EVENTS_SELECTORS;

export type VariantStyle<K extends keyof CheckboxEventsSelectors> = Record<
  CheckboxEventsSelectors[K],
  {
    outline?: string;
    color?: string;
    backgroundColor?: string;
    border?: string;
    outlineOffset?: number;
    borderColor?: string;
  }
>;

export type CheckboxCommonVariantStyles = VariantStyle<'focused'> &
  VariantStyle<'hovered'> &
  VariantStyle<'enabled'> &
  VariantStyle<'hoveredOnEnable'>;

export type CheckboxVariantTheme = {
  focused: {
    outlineColor: string;
  };
  hovered: {
    color?: string;
    backgroundColor: string;
    borderColor: string;
    outlineColor: string;
    outlineOffset: number;
  };
  enabled: {
    borderColor: string;
    color: string;
    backgroundColor?: string;
  };
  hoveredOnEnable: {
    backgroundColor: string;
    outlineColor?: string;
    borderColor?: string;
    outlineOffset?: number;
  };
};

export type CheckboxProps = {
  text?: string;
  variant?: CheckboxVariant;
  size?: CheckboxSize;
  label?: string;
  enabled?: boolean;
  disabled?: boolean;
  focused?: boolean;
};
