import * as fonts from '@omegup-school/ui-assets/fonts';
import { typoStyles } from '@omegup-school/ui-configs/typography';
import { Styles, jss } from 'react-jss';

const makeStyles = <Name extends string, S extends Styles<Name>>(styles: S) =>
  styles;
const weights = {
  Black: '900',
  ExtraBold: '800',
  Bold: '700',
  SemiBold: '600',
  Medium: '500',
  Regular: '400',
  Light: '300',
  ExtraLight: '200',
  Thin: '100',
} as const;
const fontStyle = {
  '': 'normal',
  Italic: 'italic',
} as const;

Object.entries(weights).forEach(([weightName, fontWeight]) =>
  Object.entries(fontStyle).forEach(([styleName, fontStyle]) =>
    jss
      .createStyleSheet({
        '@global': {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `
  url('${fonts[`Poppins${weightName}${styleName}2`]}') format('woff2'),
  url('${fonts[`Poppins${weightName}${styleName}`]}') format('woff')
  `,
            fontWeight,
            fontStyle,
          },
        },
      })
      .attach()
  )
);

jss
  .createStyleSheet({
    '@global': {
      'body, input': {
        fontFamily: 'Poppins',
      },
    },
  })
  .attach();

export const styles = makeStyles({
  ...typoStyles,
});
