import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing, widths } from '@omegup-school/ui-atoms/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../../common/styles';
import {
  CHECKBOX_THEMES,
  DEFAULT_CHECKBOX_EVENTS_SELECTORS,
} from './NakedCheckBox.constants';
import {
  CheckboxCommonVariantStyles,
  CheckboxVariantTheme,
} from './NakedCheckBox.types';

const commonVariantStylesBuilder = (
  eventsTheme: Partial<CheckboxVariantTheme>,
  containerStateSelector: string
) =>
  ({
    // focused
    [DEFAULT_CHECKBOX_EVENTS_SELECTORS.focused]: {
      outline: `${borders.b5}px solid ${eventsTheme?.focused?.outlineColor}`,
    },
    // hovered
    [`.${containerStateSelector}:hover & > $input:not(:checked) + $container`]: {
      color: eventsTheme?.hovered?.color,
      backgroundColor: eventsTheme?.hovered?.backgroundColor,
      border: `${borders.b3}px solid ${eventsTheme?.hovered?.borderColor}`,
      outline: `${borders.b5}px solid ${eventsTheme?.hovered?.outlineColor}`,
      outlineOffset: eventsTheme?.hovered?.outlineOffset,
    },
    // enabled
    [DEFAULT_CHECKBOX_EVENTS_SELECTORS.enabled]: {
      border: `${borders.b3}px solid ${eventsTheme?.enabled?.borderColor}`,
      color: eventsTheme?.enabled?.color,
      backgroundColor: eventsTheme?.enabled?.backgroundColor,
    },
    // hoveredOnEnable
    [DEFAULT_CHECKBOX_EVENTS_SELECTORS.hoveredOnEnable]: {
      borderColor: eventsTheme?.hoveredOnEnable?.borderColor,
      backgroundColor: eventsTheme?.hoveredOnEnable?.backgroundColor,
      outlineColor: eventsTheme?.hoveredOnEnable?.outlineColor,
      outlineOffset: eventsTheme?.hoveredOnEnable?.outlineOffset,
    },
  } as CheckboxCommonVariantStyles);

export const useCheckBoxStyles = createUseStyles(
  ({ containerStateSelector }: { containerStateSelector: string }) => ({
    label: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.s4,
    },
    checkBoxText: {
      ...styles.paragraph_medium_regular,
    },
    input: {
      clip: 'rect(0 0 0 0)',
      position: 'absolute',
      '&:disabled + $container': {
        opacity: 0.4,
      },
    },
    container: {
      display: 'grid',
      placeItems: 'center',
      borderRadius: borders.r5,
      border: `${borders.b3}px solid ${colors.grey[500]}`,
      color: 'transparent',
      backgroundColor: 'transparent',
    },
    solid: {
      ...commonVariantStylesBuilder(
        CHECKBOX_THEMES.solid,
        containerStateSelector
      ),
    },
    border: {
      ...commonVariantStylesBuilder(
        CHECKBOX_THEMES.border,
        containerStateSelector
      ),
    },
    scale: {
      ...commonVariantStylesBuilder(
        CHECKBOX_THEMES.scale,
        containerStateSelector
      ),
    },
    large: {
      '& $container': {
        width: widths.checkbox.large,
        height: widths.checkbox.large,
      },
    },
    medium: {
      '& $container': {
        width: widths.checkbox.medium,
        height: widths.checkbox.medium,
      },
    },
    small: {
      '& $container': {
        width: widths.checkbox.small,
        height: widths.checkbox.small,
      },
    },
  })
);
