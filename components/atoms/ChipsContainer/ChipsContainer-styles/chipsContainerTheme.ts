import { colors } from '@omegup-school/ui-configs/colors';
import { ChipsStateTheme, ChipsTheme } from './chipsContainer-styles.types';
import { borders } from '@omegup-school/ui-configs/sizes';

const COMMON_CHIPS_CONTAINER_INITIAL_STYLES: ChipsStateTheme = {
  chipsBorderColor: colors.background.outline,
  chipsBackgroundColor: 'transparent',
};
const COMMON_FOCUS_CHIPS_STYLES: ChipsStateTheme = {
  chipsOutlineWidth: borders.b2,
  chipsOutlineColor: colors.blue[600],
  chispOutlineStyle: 'solid',
};
const COMMON_FOCUS_CHIPS_BORDER_STYLES: ChipsStateTheme = {
  ...COMMON_FOCUS_CHIPS_STYLES,
  chipsBackgroundColor: colors.background.default,
};

export const CHIPS_THEME: ChipsTheme = {
  border: {
    checked: {
      normal: {
        chipsBorderColor: colors.blue[500],
        ChipsColor: colors.blue[500],
        chipsBackgroundColor: 'transparent',
      },
      disabled: {
        chipsBackgroundColor: 'transparent',
        ChipsColor: colors.blue[500],
        chipsOpacity: 0.4,
      },
      focused: {
        ...COMMON_FOCUS_CHIPS_BORDER_STYLES,
      },
      hovered: {
        chipsBorderColor: colors.blue[500],
        chipsBackgroundColor: colors.light[200],
      },
      focusedAndHovered: {
        chipsOutlineColor: colors.blue[600],
      },
      pressed: {
        chipsBackgroundColor: colors.light[400],
        chipsOutlineColor: "transparent",
      },
    },
    unchecked: {
      normal: COMMON_CHIPS_CONTAINER_INITIAL_STYLES,
      disabled: {
        ...COMMON_CHIPS_CONTAINER_INITIAL_STYLES,
        chipsOpacity: 0.4,
      },
      focused: {
        ...COMMON_FOCUS_CHIPS_BORDER_STYLES,
      },
      hovered: {
        chipsBackgroundColor: colors.background.secondary,
      },
      focusedAndHovered: {
        chipsOutlineColor: colors.blue[600],
      },
      pressed: {
        chipsBackgroundColor: colors.background.outline,
        chipsOutlineColor: "transparent",
      },
    },
  },

  flat: {
    checked: {
      normal: {
        chipsBorderColor: colors.light[100],
        chipsBackgroundColor: colors.light[100],
        ChipsColor: colors.blue[500],
      },
      disabled: {
        chipsBackgroundColor: colors.light[100],
        chipsBorderColor: "transparent",
        chipsOpacity: 0.4,
        ChipsColor: colors.blue[500],
      },
      focused: {
        ...COMMON_FOCUS_CHIPS_STYLES,
        chipsBackgroundColor: colors.light[100],
        chipsBorderColor: colors.light[500],
      },
      hovered: {
        chipsBackgroundColor: colors.light[200],
      },
      focusedAndHovered: {
        chipsBackgroundColor: colors.light[200],
      },
      pressed: {
        chipsBackgroundColor: colors.light[500],
        chipsBorderColor: colors.light[500],
        chipsOutlineColor: "transparent",
      },
    },
    unchecked: {
      normal: {
        chipsBorderColor: "transparent",
        chipsBackgroundColor: colors.background.secondary,
      },
      disabled: {
        ...COMMON_CHIPS_CONTAINER_INITIAL_STYLES,
        chipsBorderColor: "transparent",
        chipsOpacity: 0.4,
      },
      focused: {
        ...COMMON_FOCUS_CHIPS_STYLES,
        chipsBackgroundColor: colors.background.secondary,
      },
      hovered: {
        chipsBackgroundColor:colors.background.overlay,
        chipsBorderColor: colors.background.overlay,
      },
      focusedAndHovered: {
        chipsBackgroundColor:colors.background.secondary,
        chipsBorderColor: colors.background.secondary,
      },
      pressed: {
        chipsBackgroundColor:colors.background.outline,
        chipsBorderColor: colors.background.outline,
        chipsOutlineColor: "transparent",
      },
    },
  },
};
