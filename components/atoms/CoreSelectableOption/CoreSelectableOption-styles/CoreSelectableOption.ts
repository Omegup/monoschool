import { colors } from '@omegup-school/ui-configs/colors';
import {
  SelectableOptionStateTheme,
  SelectableOptionTheme,
} from './CoreSelectableOption-styles.types';

const COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES: SelectableOptionStateTheme['checkbox'] =
  {
    checkboxBorderColor: colors.grey[500],
    checkboxBackgroundColor: 'transparent',
    tickColor: 'transparent',
  };
//TODO : Remove partial
export const SELECTABLE_OPTION_THEME: Partial<SelectableOptionTheme> = {
  solid: {
    checked: {
      normal: {
        checkbox: {
          checkboxBorderColor: colors.blue[500],
          tickColor: colors.background.default,
          checkboxBackgroundColor: colors.blue[500],
        },
        radio: {},
      },
      disabled: {
        checkbox: {
          checkboxBorderColor: colors.blue[500],
          tickColor: colors.background.default,
          checkboxBackgroundColor: colors.blue[500],
          checkboxOpacity: 0.4,
          
        },
        radio: {},
      },
      focused: {
        checkbox: {
          checkboxOutlineColor: colors.blue[900],
        },
        radio: {},
      },
      hovered: {
        checkbox: {
          checkboxBorderColor: colors.blue[700],
          checkboxBackgroundColor: colors.blue[700],
        },
        radio: {},
      },
      focusedAndHovered: {
        checkbox: {
          checkboxOutlineColor: colors.blue[900],
          checkboxBorderColor: colors.blue[500],
          tickColor: colors.background.default,
          checkboxBackgroundColor: colors.blue[500],
        },
        radio: {},
      },
      pressed: {
        checkbox: {
          checkboxBorderColor: colors.blue[700],
          checkboxBackgroundColor: colors.blue[700],
        },
        radio: {},
      },
    },
    unchecked: {
      normal: {
        checkbox: COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
        radio: {
          outlineColor : 'red',
          containerColor: colors.grey[500],
          containerWidth: '83%',
          outsideCircleColor: colors.background.secondary,
          outsideCircleWidth: '80%',
          insideCircleColor: colors.danger[500],
          insideCircleWidth: '50%',
        },
      },
      disabled: {
        checkbox: {
          ...COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
          checkboxOpacity: 0.4,
        },
        radio: {

        },
      },
      focused: {
        checkbox: {
          checkboxOutlineColor: colors.blue[900],
        },
        radio: {},
      },
      hovered: {
        checkbox: {
          checkboxBackgroundColor: colors.grey[500],
          checkboxBorderColor: colors.grey[500],
        },
        radio: {
          outlineColor: colors.grey[400],
          containerColor: colors.grey[400],
          containerWidth: '83%',
          outsideCircleColor: colors.grey[400],
          outsideCircleWidth: '83%',
          insideCircleColor: colors.grey[400],
          insideCircleWidth: '83%',
        },
      },
      focusedAndHovered: {
        checkbox: {
          checkboxOutlineColor: colors.blue[900],
        },
        radio: {
          containerColor: colors.grey[500],
          outsideCircleColor: colors.background.default,
          outsideCircleWidth: '16px',
        },
      },
      pressed: {
        checkbox: {
          checkboxBackgroundColor: colors.grey[500],
          checkboxBorderColor: colors.grey[500],
          checkboxOutlineColor: colors.grey[500],
        },
        radio: {
          containerColor: colors.grey[500],
          outsideCircleColor: colors.background.default,
          outsideCircleWidth: '16px',
        },
      },
    },
  },
  // border: {
  //   checked: {
  //     normal: {
  //       checkboxBorderColor: colors.blue[500],
  //       tickColor: colors.blue[500],
  //     },
  //     disabled: {
  //       checkboxBorderColor: colors.blue[500],
  //       tickColor: colors.blue[500],
  //       checkboxOpacity: 0.4,
  //     },
  //     focused: {
  //       checkboxOutlineColor: colors.pink[500],
  //     },
  //     hovered: {
  //       checkboxOutlineColor: colors.light[400],
  //       checkboxBorderColor: colors.blue[500],
  //       checkboxBackgroundColor: colors.light[400],
  //       tickColor: colors.blue[500],
  //     },
  //     focusedAndHovered: {
  //       checkboxOutlineColor: colors.pink[500],
  //     },
  //     pressed: {
  //       checkboxOutlineColor: colors.light[500],
  //       checkboxBorderColor: colors.blue[500],
  //       checkboxBackgroundColor: colors.light[500],
  //       tickColor: colors.blue[500],
  //     },
  //   },
  //   unchecked: {
  //     normal: COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
  //     disabled: {
  //       ...COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
  //       checkboxOpacity: 0.4,
  //     },
  //     focused: {
  //       checkboxOutlineColor: colors.pink[500],
  //     },
  //     hovered: {
  //       checkboxOutlineColor: colors.dark.default,
  //       checkboxBorderColor: colors.grey[300],
  //       checkboxBackgroundColor: colors.grey[300],
  //       tickColor: colors.grey[300],
  //     },
  //     focusedAndHovered: {
  //       checkboxOutlineColor: colors.pink[500],
  //     },
  //     pressed: {
  //       checkboxOutlineColor: colors.dark.default,
  //       checkboxBorderColor: colors.grey[300],
  //       checkboxBackgroundColor: colors.grey[300],
  //       tickColor: colors.grey[300],
  //     },
  //   },
  // },
  // scale: {
  //   checked: {
  //     normal: {
  //       checkboxBorderColor: colors.blue[500],
  //       tickColor: colors.background.default,
  //       checkboxBackgroundColor: colors.blue[500],
  //     },
  //     disabled: {
  //       checkboxBorderColor: colors.blue[500],
  //       tickColor: colors.background.default,
  //       checkboxBackgroundColor: colors.blue[500],
  //       checkboxOpacity: 0.4,
  //     },
  //     focused: {
  //       checkboxOutlineColor: colors.pink[500],
  //     },
  //     hovered: {},
  //     focusedAndHovered: {
  //       checkboxOutlineColor: colors.pink[500],
  //     },
  //     pressed: {},
  //   },
  //   unchecked: {
  //     normal: COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
  //     disabled: {
  //       ...COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
  //       checkboxOpacity: 0.4,
  //     },
  //     focused: {
  //       checkboxOutlineColor: colors.pink[500],
  //     },
  //     hovered: {},
  //     focusedAndHovered: {
  //       checkboxOutlineColor: colors.pink[500],
  //     },
  //     pressed: {},
  //   },
  // },
  // cell: {
  //   checked: {
  //     normal: {
  //       checkboxBorderColor: colors.blue[500],
  //       tickColor: colors.background.default,
  //       checkboxBackgroundColor: colors.blue[500],
  //     },
  //     disabled: {
  //       checkboxBorderColor: colors.blue[500],
  //       tickColor: colors.background.default,
  //       checkboxBackgroundColor: colors.blue[500],
  //       checkboxOpacity: 0.4,
  //     },
  //     focused: {
  //       checkboxOutlineColor: colors.light[500],
  //       checkboxBackgroundColor: colors.blue[500],
  //     },
  //     hovered: {
  //       checkboxBorderColor: colors.blue[700],
  //       checkboxBackgroundColor: colors.blue[700],
  //     },
  //     focusedAndHovered: {
  //       checkboxOutlineColor: colors.light[500],
  //       checkboxBackgroundColor: colors.blue[500],
  //       checkboxBorderColor: colors.blue[500],
  //     },
  //     pressed: {
  //       checkboxOutlineColor: colors.light[500],
  //       checkboxBackgroundColor: colors.blue[500],
  //       checkboxBorderColor: colors.blue[500],
  //     },
  //   },
  //   unchecked: {
  //     normal: {
  //       ...COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
  //       checkboxBorderColor: colors.grey[300],
  //     },
  //     disabled: {
  //       ...COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
  //       checkboxBorderColor: colors.grey[300],
  //       checkboxOpacity: 0.4,
  //     },
  //     focused: {
  //       checkboxOutlineColor: colors.blue[400],
  //     },
  //     hovered: {
  //       tickColor: colors.grey[200],
  //     },
  //     focusedAndHovered: {
  //       checkboxOutlineColor: colors.blue[400],
  //     },
  //     pressed: {
  //       checkboxOutlineColor: colors.blue[400],
  //     },
  //   },
  // },
  // select: {
  //   checked: {
  //     normal: {
  //       checkboxBorderColor: colors.light[500],
  //       tickColor: colors.blue[500],
  //       checkboxBackgroundColor: colors.light[500],
  //     },
  //     disabled: {
  //       checkboxBorderColor: colors.light[500],
  //       tickColor: colors.blue[500],
  //       checkboxBackgroundColor: colors.light[500],
  //       checkboxOpacity: 0.4,
  //     },
  //     focused: {
  //       checkboxBorderColor: colors.light[500],
  //       tickColor: colors.blue[500],
  //       checkboxBackgroundColor: colors.light[500],
  //     },
  //     hovered: {
  //       checkboxBorderColor: colors.light[500],
  //       tickColor: colors.blue[600],
  //       checkboxBackgroundColor: colors.light[500],
  //     },
  //     focusedAndHovered: {
  //       checkboxBorderColor: colors.light[500],
  //       tickColor: colors.blue[600],
  //       checkboxBackgroundColor: colors.light[500],
  //     },
  //     pressed: {
  //       checkboxBorderColor: colors.light[500],
  //       tickColor: 'transparent',
  //       checkboxBackgroundColor: 'transparent',
  //     },
  //   },
  //   unchecked: {
  //     normal: {
  //       ...COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
  //       checkboxBorderColor: colors.dark.default,
  //     },
  //     disabled: {
  //       ...COMMON_CHECKBOX_CONTAINER_INITIAL_STYLES,
  //       checkboxBorderColor: colors.dark.default,
  //       checkboxOpacity: 0.4,
  //     },
  //     focused: {
  //       checkboxBorderColor: colors.blue[500],
  //       tickColor: 'transparent',
  //       checkboxBackgroundColor: 'transparent',
  //     },
  //     hovered: {
  //       checkboxBorderColor: colors.blue[500],
  //       tickColor: colors.blue[400],
  //       checkboxBackgroundColor: colors.light[500],
  //     },
  //     focusedAndHovered: {
  //       checkboxBorderColor: colors.blue[500],
  //       tickColor: colors.blue[500],
  //       checkboxBackgroundColor: colors.light[500],
  //     },
  //     pressed: {
  //       checkboxBorderColor: colors.blue[500],
  //       tickColor: colors.blue[500],
  //     },
  //   },
  // },
};
