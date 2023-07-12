import { JssStyle } from 'jss';
import { INTERACTION_MAP } from './InteractiveStyles';
import { Interaction, InteractionMap } from './InteractiveStyles.types';
import {
  ChipsStateTheme,
  ChipsStatus,
  ChipsVariant,
  ChipsVariantTheme,
} from './chipsContainer-styles.types';
import { CHIPS_THEME } from './chipsContainerTheme';

const chipsInteractionToCssSelector = (
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
  return `&$label:has(> $input${focus}${checked}${disabled}) > $container${hover}${active}`;
};

const chipsStateThemeToJss = (styles: ChipsStateTheme): JssStyle => ({
  '&': {
    borderColor: styles.chipsBorderColor,
    backgroundColor: styles.chipsBackgroundColor,
    opacity: styles.chipsOpacity,
    color: styles.ChipsColor,
    outlineWidth: styles.chipsOutlineWidth,
    outlineStyle: styles.chispOutlineStyle,
    outlineColor: styles.chipsOutlineColor,
  },
});

const chipsStateThemeToJssEntries =
  (status: ChipsStatus) =>
  ([state, stateTheme]: readonly [
    state: keyof InteractionMap,
    stateTheme: ChipsStateTheme
  ]): (readonly [string, JssStyle])[] =>
    INTERACTION_MAP[state].map((interaction): [string, JssStyle] => [
      chipsInteractionToCssSelector(
        interaction,
        status === 'checked',
        state === 'disabled'
      ),
      chipsStateThemeToJss(stateTheme),
    ]);

const chipsVariantThemeToJss = (variantTheme: ChipsVariantTheme): JssStyle => {
  const themeEntries = Object.entries(variantTheme);
  const entries = themeEntries.flatMap(([status, statusTheme]) => {
    const statusThemeEntries = Object.entries(statusTheme);
    const entries = statusThemeEntries.flatMap(
      chipsStateThemeToJssEntries(status)
    );
    return entries;
  });
  return Object.fromEntries(entries);
};

export const chipsThemeToJss = (): Record<ChipsVariant, JssStyle> => {
  const themeEntries = Object.entries(CHIPS_THEME);
  return Object.fromEntries(
    themeEntries.map(([variant, theme]): readonly [ChipsVariant, JssStyle] => [
      variant,
      chipsVariantThemeToJss(theme),
    ])
  );
};
