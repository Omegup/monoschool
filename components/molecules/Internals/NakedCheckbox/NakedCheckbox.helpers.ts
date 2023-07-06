import { widths } from '@omegup-school/ui-atoms/sizes';
import {
  CHECKBOX_THEMES,
  CHECKBOX_VARIANT_STYLES,
} from './NakedCheckBox.constants';
import {
  CheckBoxVariantStylesBuilder,
  CheckboxCommonVariantStyles,
  CheckboxInteractionStatus,
  CheckboxSize,
  CheckboxStatus,
  CheckboxStyleVariables,
  CheckboxStyles,
  CheckboxVariant,
} from './NakedCheckBox.types';

export const checkboxCssSelectorBuilder = (
  containerStateSelector: string,
  interactionStatus: CheckboxInteractionStatus,
  checked: boolean
) => {
  const { isHovered, isMouseDown, isFocused } = interactionStatus;
  return `.${containerStateSelector}${isHovered ? ':hover' : ''}${
    isMouseDown ? ':active' : ''
  } &$label:has(> $input${isFocused ? ':focus' : ''}${
    checked ? ':checked' : ':not(:checked)'
  })`;
};

export const checkboxStyleFromStatusBuilder = (
  status: CheckboxStatus,
  eventsInteractionsStyles: Array<CheckBoxVariantStylesBuilder>,
  eventsTheme: Partial<CheckboxStyles[CheckboxVariant]>,
  containerStateSelector: string
) =>
  Object.fromEntries(
    eventsInteractionsStyles.map(
      (interactionStyle) =>
        [
          [
            checkboxCssSelectorBuilder(
              containerStateSelector,
              interactionStyle.interactionStatus,
              status === 'checked'
            ),
          ],
          {
            ...checkboxContainerStylesBuilder(
              eventsTheme[status]?.[interactionStyle.style]
            ),
          },
        ] as any
    )
  );

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
  eventsTheme: Partial<CheckboxStyles[CheckboxVariant]>,
  eventsInteractionsStyles: Array<CheckBoxVariantStylesBuilder>,
  containerStateSelector: string
): CheckboxCommonVariantStyles => {
  const checkedWithNoInteractionStyle = {
    [checkboxCssSelectorBuilder(
      containerStateSelector,
      { isHovered: false, isMouseDown: false, isFocused: false },
      true
    )]: { ...checkboxContainerStylesBuilder(eventsTheme.normal?.checked) },
  };

  const notCheckedWithInteractionStyle = checkboxStyleFromStatusBuilder(
    'notChecked',
    eventsInteractionsStyles,
    eventsTheme,
    containerStateSelector
  );

  const checkedWithInteractionStyle = checkboxStyleFromStatusBuilder(
    'checked',
    eventsInteractionsStyles,
    eventsTheme,
    containerStateSelector
  );

  return {
    ...checkedWithNoInteractionStyle,
    ...notCheckedWithInteractionStyle,
    ...checkedWithInteractionStyle,
  };
};

export const checkboxVariantsBuilder = (
  variant: CheckboxVariant,
  containerStateSelector: string
): Entry<Record<CheckboxVariant, CheckboxVariantJSS>> => [
  variant,
  {
    ...checkboxContainerStylesBuilder(
      CHECKBOX_VARIANT_STYLES[variant].normal.notChecked
    ),
    ...checkboxVariantStylesBuilder(
      CHECKBOX_VARIANT_STYLES[variant],
      CHECKBOX_THEMES[variant],
      containerStateSelector
    ),
  },
];

type CheckboxSizeJSS = {
  '& $container': {
    width: string;
    height: string;
  };
};

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
