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
  borderColor: styles?.outlineColor,
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
    },
  // activated
  [DEFAULT_CHECKBOX_EVENTS_SELECTORS.activated(containerStateSelector)]: {
    ...checkboxContainerStylesBuilder(eventsTheme?.activated),
  },
  // activatedOnChecked
  [DEFAULT_CHECKBOX_EVENTS_SELECTORS.activatedOnChecked(containerStateSelector)]:
    {
      ...checkboxContainerStylesBuilder(eventsTheme?.activatedOnChecked),
    },
});

type CheckboxSizeJSS = {
  '& $container': {
    width: string;
    height: string;
  };
}

export const checkboxSizesBuilder = (
  size: CheckboxSize
): Entry<Record<CheckboxSize, CheckboxSizeJSS>> => [
  size,
  {
    '& $container': {
      width: widths.nakedCheckbox[size],
      height: widths.nakedCheckbox[size],
    },
  },
];

type CheckboxVariantJSS = {
  '& > $container': {
    borderColor: string | undefined;
    backgroundColor: string | undefined;
    color: string | undefined;
  };
};

export const checkboxVariantsBuilder = (
  variant: CheckboxVariant,
  containerStateSelector: string
): Entry<Record<CheckboxVariant, CheckboxVariantJSS>> => [
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
