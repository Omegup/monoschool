import { widths } from '@omegup-school/ui-atoms/sizes';
import {
  CHECKBOX_THEMES,
  DEFAULT_CHECKBOX_EVENTS_SELECTORS,
} from './NakedCheckBox.constants';
import {
  CheckboxCommonVariantStyles,
  CheckboxSize,
  CheckboxStyleVariables,
  CheckboxVariant,
  CheckboxVariantTheme,
} from './NakedCheckBox.types';

export const checkboxContainerStylesBuilder = (
  styles?: CheckboxStyleVariables
) => ({
  '& > $container': {
    borderColor: styles?.borderColor,
    backgroundColor: styles?.backgroundColor,
    color: styles?.color,
  },
});

export const checkboxVariantStylesBuilder = (
  eventsTheme: Partial<CheckboxVariantTheme>,
  containerStateSelector: string
): CheckboxCommonVariantStyles => ({
  // hovered
  [DEFAULT_CHECKBOX_EVENTS_SELECTORS.hovered(containerStateSelector)]: {
    borderColor: eventsTheme?.hovered?.outlineColor,
    ...checkboxContainerStylesBuilder(eventsTheme?.hovered),
  },
  // checked
  [DEFAULT_CHECKBOX_EVENTS_SELECTORS.checked(containerStateSelector)]: {
    ...checkboxContainerStylesBuilder(eventsTheme?.checked),
  },
  // hoveredOnChecked
  [DEFAULT_CHECKBOX_EVENTS_SELECTORS.hoveredOnChecked(containerStateSelector)]:
    {
      ...checkboxContainerStylesBuilder(eventsTheme?.hoveredOnChecked),
      borderColor: eventsTheme?.hoveredOnChecked?.outlineColor,
    },
  // focused
  [DEFAULT_CHECKBOX_EVENTS_SELECTORS.focused(containerStateSelector)]: {
    borderColor: eventsTheme?.focused?.outlineColor,
  },
  // focusedOnChecked
  [DEFAULT_CHECKBOX_EVENTS_SELECTORS.focusedOnChecked(containerStateSelector)]:
    {
      borderColor: eventsTheme?.focusedOnChecked?.outlineColor,
    },
});

export const checkboxSizesBuilder = (size: CheckboxSize) => [
  size,
  {
    '& $container': {
      width: widths.nakedCheckbox[size],
      height: widths.nakedCheckbox[size],
    },
  } as const,
];

export const checkboxVariantsBuilder = (
  variant: CheckboxVariant,
  containerStateSelector: string
) => [
  variant,
  {
    ...checkboxContainerStylesBuilder(
      CHECKBOX_THEMES[variant].initialContainerStyles
    ),
    ...checkboxVariantStylesBuilder(
      CHECKBOX_THEMES[variant],
      containerStateSelector
    ),
  },
];
