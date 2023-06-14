import { Record } from 'omegup-school';

const makeTypo = <
  A extends string,
  B extends string,
  C extends string,
  S extends Record<A, Record<B, Record<C, { fontWeight: 'bold'; size: number }>>>
>(
  styles: S
) => styles;
export const typography = makeTypo({
  heading: {
    h3: {
      bold: {
        fontWeight: 'bold' as const,
        size: 32,
      },
    },
    h4: {
      bold: {
        fontWeight: 'bold' as const,
        size: 28,
      },
    },
    h5: {
      bold: {
        fontWeight: 'bold' as const,
        size: 24,
      },
    },
  },
});
