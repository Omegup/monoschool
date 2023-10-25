import { JssStyle } from 'jss';
import { INTERACTION_MAP } from './InteractiveStyles';
import { Interaction, InteractionMap } from './InteractiveStyles.types';
import {
  SelectableOptionStateTheme,
  CheckboxStatus,
  SelectableOptionVariant,
  SelectableOptionVariantTheme,
  SelectableOptionType,
} from './CoreSelectableOption-styles.types';
import { SELECTABLE_OPTION_THEME } from './CoreSelectableOption';
import { radioNodeClassNames } from '../CoreSelectableOption';
import { borders } from '@omegup-school/ui-configs/sizes';

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

const selectableOptionThemeToJss = (
  styles: SelectableOptionStateTheme
): { [k in SelectableOptionType]: JssStyle } => ({
  checkbox: {
    border: `${borders.b2}px solid transparent`,
    borderRadius: borders.r4,
    borderColor: styles.checkbox.checkboxOutlineColor,
    '& > $container': {
      borderColor: styles.checkbox.checkboxBorderColor,
      backgroundColor: styles.checkbox.checkboxBackgroundColor,
      color: styles.checkbox.tickColor,
      opacity: styles.checkbox.checkboxOpacity,
    },
  },
  radio: {
    backgroundColor: styles.radio.outlineColor,
    '& > $container': {
      width: styles.radio.containerWidth,
      height: styles.radio.containerWidth,
      backgroundColor: styles.radio.containerColor,
      [`& > .${radioNodeClassNames.outsideRadioCircle}`]: {
        width: styles.radio.outsideCircleWidth,
        height: styles.radio.outsideCircleWidth,
        backgroundColor: styles.radio.outsideCircleColor,
        [`& > .${radioNodeClassNames.insideRadioCircle}`]: {
          width: styles.radio.insideCircleWidth,
          height: styles.radio.insideCircleWidth,
          backgroundColor: styles.radio.insideCircleColor,
        },
      },
    },
  },
});

const SelectableOptionThemeToJssEntries =
  (
    containerStateSelector: string,
    status: CheckboxStatus,
    type: SelectableOptionType
  ) =>
  ([state, stateTheme]: readonly [
    state: keyof InteractionMap,
    stateTheme: SelectableOptionStateTheme
  ]): (readonly [string, JssStyle])[] =>
    INTERACTION_MAP[state].map((interaction): [string, JssStyle] => [
      checkboxInteractionToCssSelector(
        containerStateSelector,
        interaction,
        status === 'checked',
        state === 'disabled'
      ),
      selectableOptionThemeToJss(stateTheme)[type],
    ]);

const SelectableOptionVariantThemeToJss = (
  variantTheme: SelectableOptionVariantTheme,
  containerStateSelector: string,
  type: SelectableOptionType
): JssStyle => {
  const themeEntries = Object.entries(variantTheme);
  const entries = themeEntries.flatMap(([status, statusTheme]) => {
    const statusThemeEntries = Object.entries(statusTheme);
    const entries = statusThemeEntries.flatMap(
      SelectableOptionThemeToJssEntries(containerStateSelector, status, type)
    );
    return entries;
  });
  return Object.fromEntries(entries);
};

export const SelectableOptionThemeToJss = (
  containerStateSelector: string,
  type: SelectableOptionType
): Record<SelectableOptionVariant, JssStyle> => {
  const themeEntries = Object.entries(SELECTABLE_OPTION_THEME);
  const a = Object.fromEntries(
    themeEntries.map(
      ([variant, theme]): readonly [SelectableOptionVariant, JssStyle] => [
        variant,
        SelectableOptionVariantThemeToJss(theme, containerStateSelector, type),
      ]
    )
  );
  console.log({ a });

  return a;
};
