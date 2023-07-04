import { colors } from '@omegup-school/ui-atoms/colors';
import {
  CheckboxSize,
  CheckboxTheme,
  CheckboxVariant,
} from './NakedCheckBox.types';

export const CHECKBOX_SIZES = ['small', 'medium', 'large'] as const;
export const CHECKBOX_VARIANTS = [
  'solid',
  'border',
  'scale',
  'cell',
  'select',
] as const;

export const DEFAULT_CHECKBOX_VARIANT: CheckboxVariant = 'solid' as const;
export const DEFAULT_CHECKBOX_SIZE: CheckboxSize = 'medium' as const;

export const DEFAULT_CHECKBOX_EVENTS_SELECTORS = {
  activated: (container: string) =>
    `.${container}:active &$label:has(> $input:not(:checked))` as const,
  hovered: (container: string) =>
    `.${container}:hover:not(:active) &$label:has(> $input:not(:checked))` as const,
  checked: (container: string) =>
    `.${container} &$label:has(> $input:checked)` as const,
  hoveredOnChecked: (container: string) =>
    `.${container}:hover:not(:active) &$label:has(> $input:checked)` as const,
  activatedOnChecked: (container: string) =>
    `.${container}:active &$label:has(> $input:checked)` as const,
  focused: (container: string) =>
    `.${container}:focus &$label:has(> $input:not(:checked))` as const,
  focusedOnChecked: (container: string) =>
    `.${container}:focus &$label:has(> $input:checked)` as const,
} as const;

export const COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES = {
  borderColor: colors.grey[500],
  backgroundColor: 'transparent',
  color: 'transparent',
} as const;

export const CHECKBOX_THEMES: CheckboxTheme = {
  solid: {
    initialContainerStyles: COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
    focused: {
      outlineColor: colors.blue[900],
    },
    hovered: {
      backgroundColor: colors.grey[500],
      borderColor: colors.grey[500],
      outlineColor: colors.grey[500],
    },
    activated: {
      backgroundColor: colors.grey[500],
      borderColor: colors.grey[500],
      outlineColor: colors.grey[500],
    },
    checked: {
      borderColor: colors.blue[500],
      color: colors.background.default,
      backgroundColor: colors.blue[500],
    },
    focusedOnChecked: {
      outlineColor: colors.blue[900],
    },
    hoveredOnChecked: {
      borderColor: colors.blue[700],
      backgroundColor: colors.blue[700],
    },
    activatedOnChecked: {
      borderColor: colors.blue[700],
      backgroundColor: colors.blue[700],
    },
  },
  border: {
    initialContainerStyles: COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
    focused: {
      outlineColor: colors.pink[500],
    },
    hovered: {
      outlineColor: colors.grey[500],
      borderColor: colors.grey[300],
      backgroundColor: colors.grey[300],
      color: colors.grey[300],
    },
    activated: {
      outlineColor: colors.grey[500],
      borderColor: colors.grey[300],
      backgroundColor: colors.grey[300],
      color: colors.grey[300],
    },
    checked: {
      borderColor: colors.blue[500],
      color: colors.blue[500],
    },
    focusedOnChecked: {
      outlineColor: colors.pink[500],
    },
    hoveredOnChecked: {
      outlineColor: colors.light[400],
      borderColor: colors.blue[500],
      backgroundColor: colors.light[400],
      color: colors.blue[500],
    },
    activatedOnChecked: {
      outlineColor: colors.light[500],
      borderColor: colors.blue[500],
      backgroundColor: colors.light[500],
      color: colors.blue[500],
    },
  },
  scale: {
    initialContainerStyles: COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
    focused: {
      outlineColor: colors.pink[400],
    },
    checked: {
      borderColor: colors.blue[500],
      color: colors.background.default,
      backgroundColor: colors.blue[500],
    },
    focusedOnChecked: {
      outlineColor: colors.pink[400],
    },
  },
  cell: {
    initialContainerStyles: {
      ...COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
      borderColor: colors.grey[300],
    },
    activated: {
      outlineColor: colors.blue[400],
    },
    hovered: {
      color: colors.grey[200],
      backgroundColor: 'transparent',
      borderColor: colors.grey[300],
      outlineColor: colors.background.secondary,
    },
    checked: {
      borderColor: colors.blue[500],
      color: colors.background.default,
      backgroundColor: colors.blue[500],
    },
    hoveredOnChecked: {
      borderColor: colors.blue[700],
      backgroundColor: colors.blue[700],
    },
    activatedOnChecked: {
      outlineColor: colors.light[500],
    },
  },
  select: {
    //to be continued ...
  },
};
