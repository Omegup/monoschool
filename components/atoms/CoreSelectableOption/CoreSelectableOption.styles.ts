import { widths } from '@omegup-school/ui-configs/sizes';
import { borders } from '@omegup-school/ui-configs/sizes/border';
import { JssStyle } from 'jss';
import { createUseStyles } from 'react-jss';
import {
  SelectableOptionSize,
  SelectableOptionType,
} from './CoreSelectableOption-styles/CoreSelectableOption-styles.types';
import { SelectableOptionThemeToJss } from './CoreSelectableOption-styles/CoreSelectableOptionThemeToJss';
import { radioNodeClassNames } from './CoreSelectableOption';

const checkboxContainerWidthJss = (width: string) => ({
  '& $container': {
    display: 'grid',
    placeItems: 'center',
    borderRadius: borders.r3,
    borderWidth: borders.b3,
    borderStyle: 'solid',
    boxSizing: 'border-box',
    width,
    height: width,
  },
});

const radioContainerWidthJss = (width: string) => ({
  width: width,
  height: width,
  borderRadius: '50%',
  display : 'flex',
  alignItems : 'center' ,
  justifyContent :  'center' , 
  '& > $container': {
    display : 'flex',
    alignItems : 'center' ,
    justifyContent :  'center' , 
    borderRadius: '50%',
    [`& > .outsideRadioCircle`]: {
      display : 'flex',
      alignItems : 'center' ,
      justifyContent :  'center' , 
      borderRadius: '50%',
      [`& > .insideRadioCircle`]: {
        display : 'flex',
        alignItems : 'center' ,
        justifyContent :  'center' , 
        borderRadius: '50%',
      },
    },
  },
});

const SELECTABLE_OPTION_SIZES = {
  checkbox: Object.fromEntries(
    Object.entries(widths.nakedCheckbox).map(
      ([size, width]): readonly [SelectableOptionSize, JssStyle] => [
        size,
        checkboxContainerWidthJss(width),
      ]
    )
  ),
  radio: Object.fromEntries(
    Object.entries(widths.radio).map(
      ([size, width]): readonly [SelectableOptionSize, JssStyle] => [
        size,
        radioContainerWidthJss(width),
      ]
    )
  ),
} satisfies {
  [type in SelectableOptionType]: { [key in SelectableOptionSize]: JssStyle };
};

export const useCoreSelectableOptionStyles = createUseStyles(
  ({
    containerStateSelector,
    type,
  }: {
    containerStateSelector: string;
    type: SelectableOptionType;
  }) => ({
    label: {},
    input: {
      clip: 'rect(0 0 0 0)',
      position: 'absolute',
      '&:disabled + $container': {
        opacity: 0.4,
      },
    },
    container: {},
    ...SELECTABLE_OPTION_SIZES[type],
    ...SelectableOptionThemeToJss(containerStateSelector, type),
  })
);
