import { CheckboxVariant, CheckboxSize, CheckboxEvent } from './CheckBox.types';

export const DEFAULT_CHECKBOX_VARIANT: CheckboxVariant = 'border' as const;
export const DEFAULT_CHECKBOX_SIZE: CheckboxSize = 'medium' as const;
export const DEFAULT_CHECKBOX_EVENTS_SELECTORS: {
  [Event in CheckboxEvent]: string;
} = {
  focused: '& > $input:focus + $container',
  hovered: '& > $input:not(:checked) + $container:hover',
  enabled: '& > $input:checked + $container',
  hoveredOnEnable: '& > $input:checked + $container:hover',
} as const;
