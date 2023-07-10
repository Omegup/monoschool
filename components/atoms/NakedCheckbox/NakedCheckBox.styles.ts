import { borders } from '@omegup-school/ui-configs/sizes/border';
import { createUseStyles } from 'react-jss';
import { checkboxThemeToJss } from './NakedCheckbox-styles/checkboxThemeToJss';
import { widths } from '@omegup-school/ui-configs/sizes';
import { CheckboxSize } from './NakedCheckbox-styles/NakedCheckbox-styles.types';
import { JssStyle } from 'jss';

const containerWidthJss = (width: string) => ({
  '& $container': {
    width,
    height: width,
  },
});

const CHECKBOX_SIZE_JSS = Object.fromEntries(
  Object.entries(widths.nakedCheckbox).map(
    ([size, width]): readonly [CheckboxSize, JssStyle] => [
      size,
      containerWidthJss(width),
    ]
  )
) satisfies {
  [key in CheckboxSize]: JssStyle;
};

export const useCheckBoxStyles = createUseStyles(
  ({ containerStateSelector }: { containerStateSelector: string }) => ({
    label: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      border: `${borders.b2}px solid transparent`,
      borderRadius: borders.r4,
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
      borderRadius: borders.r3,
      borderWidth: borders.b3,
      borderStyle: 'solid',
      boxSizing: 'border-box',
    },

    ...checkboxThemeToJss(containerStateSelector),

    ...CHECKBOX_SIZE_JSS,
  })
);
