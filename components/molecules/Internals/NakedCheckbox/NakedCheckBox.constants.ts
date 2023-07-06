import { colors } from '@omegup-school/ui-atoms/colors';
import {
  CheckBoxVariantStylesBuilder,
  CheckboxSize,
  CheckboxStyles,
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

export const COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES = {
  borderColor: colors.grey[500],
  backgroundColor: 'transparent',
  color: 'transparent',
} as const;

export const CHECKBOX_VARIANT_STYLES: CheckboxStyles = {
  solid: {
    normal: {
      checked: {
        borderColor: colors.blue[500],
        color: colors.background.default,
        backgroundColor: colors.blue[500],
      },
      notChecked: COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
    },
    checked: {
      focused: {
        outlineColor: colors.blue[900],
      },
      hovered: {
        borderColor: colors.blue[700],
        backgroundColor: colors.blue[700],
      },
      focusedAndHovered: {
        outlineColor: colors.blue[900],
        borderColor: colors.blue[500],
        color: colors.background.default,
        backgroundColor: colors.blue[500],
      },
      pressed: {
        borderColor: colors.blue[700],
        backgroundColor: colors.blue[700],
      },
    },
    notChecked: {
      focused: {
        outlineColor: colors.blue[900],
      },
      hovered: {
        backgroundColor: colors.grey[500],
        borderColor: colors.grey[500],
      },
      focusedAndHovered: {
        outlineColor: colors.blue[900],
      },
      pressed: {
        backgroundColor: colors.grey[500],
        borderColor: colors.grey[500],
        outlineColor: colors.grey[500],
      },
    },
  },
  border: {
    normal: {
      checked: {
        borderColor: colors.blue[500],
        color: colors.blue[500],
      },
      notChecked: COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
    },
    checked: {
      focused: {
        outlineColor: colors.pink[500],
      },
      hovered: {
        outlineColor: colors.light[400],
        borderColor: colors.blue[500],
        backgroundColor: colors.light[400],
        color: colors.blue[500],
      },
      focusedAndHovered: {
        outlineColor: colors.pink[500],
      },
      pressed: {
        outlineColor: colors.light[500],
        borderColor: colors.blue[500],
        backgroundColor: colors.light[500],
        color: colors.blue[500],
      },
    },
    notChecked: {
      focused: {
        outlineColor: colors.pink[500],
      },
      hovered: {
        outlineColor: colors.dark.default,
        borderColor: colors.grey[300],
        backgroundColor: colors.grey[300],
        color: colors.grey[300],
      },
      focusedAndHovered: {
        outlineColor: colors.pink[500],
      },
      pressed: {
        outlineColor: colors.dark.default,
        borderColor: colors.grey[300],
        backgroundColor: colors.grey[300],
        color: colors.grey[300],
      },
    },
  },
  scale: {
    normal: {
      checked: {
        borderColor: colors.blue[500],
        color: colors.background.default,
        backgroundColor: colors.blue[500],
      },
      notChecked: COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
    },
    checked: {
      focused: {
        outlineColor: colors.pink[500],
      },
      hovered: {},
      focusedAndHovered: {
        outlineColor: colors.pink[500],
      },
      pressed: {},
    },
    notChecked: {
      focused: {
        outlineColor: colors.pink[500],
      },
      hovered: {},
      focusedAndHovered: {
        outlineColor: colors.pink[500],
      },
      pressed: {},
    },
  },
  cell: {
    normal: {
      checked: {
        borderColor: colors.blue[500],
        color: colors.background.default,
        backgroundColor: colors.blue[500],
      },
      notChecked: {
        ...COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
        borderColor: colors.grey[300],
      },
    },
    checked: {
      focused: {
        outlineColor: colors.light[500],
        backgroundColor: colors.blue[500],
      },
      hovered: {
        borderColor: colors.blue[700],
        backgroundColor: colors.blue[700],
      },
      focusedAndHovered: {
        outlineColor: colors.light[500],
        backgroundColor: colors.blue[500],
        borderColor: colors.blue[500],
      },
      pressed: {
        outlineColor: colors.light[500],
        backgroundColor: colors.blue[500],
        borderColor   : colors.blue[500],
      },
    },
    notChecked: {
      focused: {
        outlineColor: colors.blue[400],
      },
      hovered: {
        color: colors.grey[200],
      },
      focusedAndHovered: {
        outlineColor: colors.blue[400],
      },
      pressed: {
        outlineColor: colors.blue[400],
      },
    },
  },
  select: {
    normal: {
      checked: {
        borderColor: colors.light[500],
        color: colors.blue[500],
        backgroundColor: colors.light[500],
      },
      notChecked: {
        ...COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
        borderColor: colors.dark.default,
      },
    },
    checked: {
      focused: {
        borderColor: colors.light[500],
        color: colors.blue[500],
        backgroundColor: colors.light[500],
      },
      hovered: {
        borderColor: colors.light[500],
        color: colors.blue[600],
        backgroundColor: colors.light[500],
      },
      focusedAndHovered: {
        borderColor: colors.light[500],
        color: colors.blue[600],
        backgroundColor: colors.light[500],
      },
      pressed: {
        borderColor: colors.light[500],
        color: colors.blue[500],
        backgroundColor: colors.blue[500],
      },
    },
    notChecked: {
      focused: {
        borderColor: colors.blue[500],
        color: 'transparent',
        backgroundColor: 'transparent',
      },
      hovered: {
        borderColor: colors.blue[500],
        color: colors.blue[400],
        backgroundColor: colors.light[500],
      },
      focusedAndHovered: {
        borderColor: colors.blue[500],
        color: colors.blue[500],
        backgroundColor: colors.light[500],
      },
      pressed: {
        borderColor: colors.blue[500],
        color: colors.blue[500],
      },
    },
  },
};

export const COMMON_CHECKBOX_INTERACTIONS = [
  {
    style: 'focused',
    interactionStatus: {
      isHovered: false,
      isMouseDown: false,
      isFocused: true,
    },
  },
  {
    style: 'focused',
    interactionStatus: {
      isHovered: false,
      isMouseDown: true,
      isFocused: false,
    },
  },
  {
    style: 'focused',
    interactionStatus: {
      isHovered: false,
      isMouseDown: true,
      isFocused: true,
    },
  },
  {
    style: 'hovered',
    interactionStatus: {
      isHovered: true,
      isMouseDown: false,
      isFocused: false,
    },
  },
  {
    style: 'focusedAndHovered',
    interactionStatus: {
      isHovered: true,
      isMouseDown: false,
      isFocused: true,
    },
  },
  {
    style: 'pressed',
    interactionStatus: {
      isHovered: true,
      isMouseDown: true,
      isFocused: false,
    },
  },
  {
    style: 'pressed',
    interactionStatus: {
      isHovered: true,
      isMouseDown: true,
      isFocused: true,
    },
  },
] as const;
export const CHECKBOX_THEMES: {
  [k in CheckboxVariant]: Array<CheckBoxVariantStylesBuilder>;
} = {
  solid: [...COMMON_CHECKBOX_INTERACTIONS],
  border: [...COMMON_CHECKBOX_INTERACTIONS],
  scale: [...COMMON_CHECKBOX_INTERACTIONS],
  cell: [...COMMON_CHECKBOX_INTERACTIONS],
  select: [...COMMON_CHECKBOX_INTERACTIONS],
};
