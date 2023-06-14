import { Styles, jss } from 'react-jss';
import { JssStyle } from 'jss';
import { typography } from '@omegup-school/ui-atoms/typography';
import * as fonts from '@omegup-school/ui-assets/fonts';

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
    jss.createStyleSheet({
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
    }).attach()
  )
);

jss
  .createStyleSheet({
    '@global': {
      body: {
        fontFamily: 'Poppins',
      },
    },
  })
  .attach();

const flatObject = <Q>(state: Q) => {
  type K = string & keyof Q;
  interface H<L extends K> extends HKT<string & keyof Q[L], string> {
    readonly out: `${L}_${I<string & keyof Q[L], this>}`;
  }
  const mapper = <L extends K>([k, v]: readonly [L, Q[L]]): Entry<
    Q[L],
    H<L>
  >[] => {
    type T = Q[L];
    type K = string & keyof T;
    interface F extends HKT<K> {
      readonly out: readonly [I<K, this>, T[I<K, this>]];
    }
    interface G extends HKT<K> {
      readonly out: readonly [`${L}_${I<K, this>}`, T[I<K, this>]];
    }
    return Object.entries(v).map<K, F, G>(
      <k extends K>([c, d]: App<F, k>): App<G, k> => [`${k}_${c}`, d]
    );
  };
  interface F extends HKT<K> {
    readonly out: readonly [I<K, this>, Q[I<K, this>]];
  }
  interface G extends HKT<K> {
    readonly out: Entry<Q[I<K, this>], H<I<K, this>>>;
  }
  return Object.fromEntries(Object.entries(state).flatMap<K, F, G>(mapper));
};
const typoStyles = flatObject(flatObject(typography));
export const styles = makeStyles({
  ...typoStyles,
});
