import { JssStyle } from 'jss';
import { INTERACTION_MAP } from './InteractiveStyles';
import { Interaction, InteractionMap } from './InteractiveStyles.types';
import {
  CheckboxStateTheme,
  CheckboxStatus,
  CheckboxVariant,
  CheckboxVariantTheme,
} from './NakedCheckbox-styles.types';
import { CHECKBOX_THEME } from './checkboxTheme';

const checkboxInteractionToCssSelector = (
  containerStateSelector: string,
  interactionStatus: Interaction,
  isChecked: boolean,
  isDisabled: boolean
) => {
  const entries = Object.entries(interactionStatus).map(
    ([pseudoClass, state]): readonly [keyof Interaction, string] => [
      pseudoClass,
      state ? `:${pseudoClass}` : `:not(${pseudoClass})`,
    ]
  );
  const {
    active = '',
    focus = '',
    hover = '',
  } = Object.fromEntries(entries) satisfies {
    [key in keyof Interaction]: string;
  };
  const checked = isChecked ? ':checked' : ':not(:checked)';
  const disabled = isDisabled ? ':disabled' : ':not(:disabled)';
  return `.${containerStateSelector}${hover}${active} &$label:has(> $input${focus}${checked}${disabled})`;
};

const checkboxStateThemeToJss = (styles: CheckboxStateTheme): JssStyle => ({
  borderColor: styles.checkboxOutlineColor,
  '& > $container': {
    borderColor: styles.checkboxBorderColor,
    backgroundColor: styles.checkboxBackgroundColor,
    color: styles.tickColor,
    opacity: styles.checkboxOpacity,
  },
});

const checkboxStateThemeToJssEntries =
  (containerStateSelector: string, status: CheckboxStatus) =>
  ([state, stateTheme]: readonly [
    state: keyof InteractionMap,
    stateTheme: CheckboxStateTheme
  ]): (readonly [string, JssStyle])[] =>
    INTERACTION_MAP[state].map((interaction): [string, JssStyle] => [
      checkboxInteractionToCssSelector(
        containerStateSelector,
        interaction,
        status === 'checked',
        state === 'disabled'
      ),
      checkboxStateThemeToJss(stateTheme),
    ]);

const checkboxVariantThemeToJss = (
  variantTheme: CheckboxVariantTheme,
  containerStateSelector: string
): JssStyle => {
  const themeEntries = Object.entries(variantTheme);
  const entries = themeEntries.flatMap(([status, statusTheme]) => {
    const statusThemeEntries = Object.entries(statusTheme);
    const entries = statusThemeEntries.flatMap(
      checkboxStateThemeToJssEntries(containerStateSelector, status)
    );
    return entries;
  });
  return Object.fromEntries(entries);
};

export const checkboxThemeToJss = (
  containerStateSelector: string
): Record<CheckboxVariant, JssStyle> => {
  const themeEntries = Object.entries(CHECKBOX_THEME);
  return Object.fromEntries(
    themeEntries.map(
      ([variant, theme]): readonly [CheckboxVariant, JssStyle] => [
        variant,
        checkboxVariantThemeToJss(theme, containerStateSelector),
      ]
    )
  );
};
