import { Record } from 'omegup-school';

type d = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
const makeTypo = <
  A extends string,
  B extends string,
  C extends string,
  S extends Record<
    A,
    Record<B, Record<C, { fontWeight: `${d}00`; fontSize: number }>>
  >
>(
  styles: S
) => styles;
export const typography = makeTypo({
  paragraph: {
    small: {
      regular: {
        fontSize: 14,
        fontWeight: '400',
      },
      medium: {
        fontSize: 14,
        fontWeight: '500',
      },
    },
    medium: {
      semiBold: {
        fontWeight: '600',
        fontSize: 16,
      },
      regular: {
        fontWeight: '400',
        fontSize: 16,
      },
    },
    xSmall: {
      regular: {
        fontWeight: '400',
        fontSize: 12,
      },
      semiBold: {
        fontWeight: '600',
        fontSize: 12,
      },
    },
    overline: {
      small: {
        fontWeight: '500',
        fontSize: 12,
      },
    },
    large: {
      regular: {
        fontWeight: '400',
        fontSize: 18,
      },
      semiBold: {
        fontWeight: '600',
        fontSize: 12,
      },
    },
    overline: {
      small: {
        fontWeight: '500',
        fontSize: 12,
      }
    },
    large: {
      regular: {
        fontWeight: '400',
        fontSize: 18,
      }
    }
  },
  heading: {
    h3: {
      bold: {
        fontWeight: '700',
        fontSize: 32,
      },
    },
    h4: {
      bold: {
        fontWeight: '700',
        fontSize: 28,
      },
    },
    h5: {
      bold: {
        fontWeight: '700',
        fontSize: 24,
      },
    },
  },
});
