import { borders } from '@omegup-school/ui-atoms/sizes';
import { createUseStyles } from 'react-jss';
import { CHECKBOX_SIZES, CHECKBOX_VARIANTS } from './NakedCheckBox.constants';
import {
  checkboxSizesBuilder,
  checkboxVariantsBuilder,
} from './NakedCheckbox.helpers';

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
    },
    ...Object.fromEntries(
      CHECKBOX_VARIANTS.map((variant) =>
        checkboxVariantsBuilder(variant, containerStateSelector)
      ) 
    ),
    ...Object.fromEntries(
      CHECKBOX_SIZES.map((size) => checkboxSizesBuilder(size))
    ),
  })
);
