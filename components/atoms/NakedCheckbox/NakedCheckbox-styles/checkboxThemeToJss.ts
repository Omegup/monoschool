import { JssStyle } from 'jss';
import { Interaction, InteractionMap } from './InteractiveStyles.types';
import {
  CheckboxStateTheme,
  CheckboxStatus,
  CheckboxVariant,
  CheckboxVariantTheme,
} from './NakedCheckbox-styles.types';
import { INTERACTION_MAP } from './InteractiveStyles';
import { CHECKBOX_THEME } from './checkboxTheme';

const checkboxInteractionToCssSelector = (
  containerStateSelector: string,
  interactionStatus: Interaction,
  isChecked: boolean
) => {
  const {
    active = '',
    focus = '',
    hover = '',
  } = Object.fromEntries(
    Object.entries(interactionStatus).map(([pseudoClass, state]) => [
      pseudoClass,
      state ? `:${pseudoClass}` : `:not(${pseudoClass})`,
    ])
  );
  const checked = isChecked ? ':checked' : ':not(:checked)';
  return `.${containerStateSelector}${hover}${active} &$label:has(> $input${focus}${checked})`;
};

const checkboxStateThemeToJss = (styles: CheckboxStateTheme): JssStyle => ({
  borderColor: styles.checkboxOutlineColor,
  '& > $container': {
    borderColor: styles.checkboxBorderColor,
    backgroundColor: styles.checkboxBackgroundColor,
    color: styles.tickColor,
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
        status === 'checked'
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
