import { colors } from '@omegup-school/ui-atoms/colors';
import { CheckboxVariant, CheckboxSize, CheckboxEvent, CheckboxVariantTheme } from './CheckBox.types';

export const DEFAULT_CHECKBOX_VARIANT: CheckboxVariant = 'border' as const;
export const DEFAULT_CHECKBOX_SIZE: CheckboxSize = 'medium' as const;
export const DEFAULT_CHECKBOX_EVENTS_SELECTORS =  {
  focused: '& > $input:focus + $container',
  hovered: `${'' as string}:hover & > $input:not(:checked) + $container`,
  enabled: '& > $input:checked + $container',
  hoveredOnEnable: '& > $input:checked + $container:hover',
} as const;

export const CHECKBOX_THEMES : {[Variant in CheckboxVariant ] : Partial<CheckboxVariantTheme>}  = {
  solid: {
    focused: {
      outlineColor: colors.blue[900],
    },
    hovered: {
      backgroundColor: colors.blue[400],
      borderColor: colors.blue[400],
      outlineColor: colors.blue[400],
      outlineOffset: -1,
    },
    enabled: {
      borderColor: colors.blue[500],
      color: colors.background.default,
      backgroundColor: colors.blue[500],
    },
    hoveredOnEnable: {
      borderColor: colors.blue[700],
      backgroundColor: colors.blue[700],
    },
  },
  border: {
    focused: {
      outlineColor: colors.danger[600],
    },
    hovered: {
      color: colors.blue[500],
      backgroundColor: colors.light[400],
      borderColor: colors.blue[500],
      outlineColor: colors.light[400],
      outlineOffset: -1,
    },
    enabled: {
      color: colors.blue[500],
      borderColor: colors.blue[500],
    },
    hoveredOnEnable: {
      backgroundColor: colors.light[400],
      outlineColor: colors.light[400],
      outlineOffset: -1,
    },
  },
  scale: {
    focused: {
      outlineColor: colors.danger[600],
    },
    enabled: {
      borderColor: colors.blue[500],
      color: colors.background.default,
      backgroundColor: colors.blue[500],
    },
  },
}
