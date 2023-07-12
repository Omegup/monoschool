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
      },
      disabled: {
        chipsBackgroundColor: colors.background.overlay,
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
        chipsBackgroundColor: colors.light[200],
      },
      focusedAndHovered: {
        chipsOutlineColor: colors.blue[600],
      },
      pressed: {
        chipsOutlineColor: colors.dark.default,
        chipsBorderColor: colors.grey[300],
        chipsBackgroundColor: colors.grey[300],
      },
    },
  },

  flat: {
    checked: {
      normal: {
        chipsBorderColor: colors.light[500],
        chipsBackgroundColor: colors.light[500],
      },
      disabled: {
        chipsBackgroundColor: colors.blue[100],
        chipsOpacity: 0.4,
      },
      focused: {
        ...COMMON_FOCUS_CHIPS_STYLES,
        chipsBackgroundColor: colors.light[500],
      },
      hovered: {
        chipsBackgroundColor: colors.light[200],
      },
      focusedAndHovered: {
        chipsBackgroundColor: colors.light[500],
      },
      pressed: {
        chipsBackgroundColor: colors.light[500],
      },
    },
    unchecked: {
      normal: {
        chipsBorderColor: colors.light[500],
        chipsBackgroundColor: colors.background.secondary,
      },
      disabled: {
        ...COMMON_CHIPS_CONTAINER_INITIAL_STYLES,
        chipsBorderColor: colors.dark.default,
        chipsOpacity: 0.4,
      },
      focused: {
        ...COMMON_FOCUS_CHIPS_STYLES,
        chipsBackgroundColor: colors.background.secondary,
      },
      hovered: {
        chipsBackgroundColor: colors.background.overlay,
      },
      focusedAndHovered: {
        chipsBackgroundColor: colors.light[500],
      },
      pressed: {
        chipsBorderColor: colors.background.outline,
      },
    },
  },
};
