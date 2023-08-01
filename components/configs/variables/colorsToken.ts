import { colors } from '../colors';

export type ColorTokenValue = string;
export type ColorsTokenName =
  | 'color-text-primary'
  | 'color-input-primary'
  | 'color-icon-primary'
  | 'color-text-secondary'
  | 'color-input-secondary'
  | 'color-icon-secondary';

const colorsEntriesTokens: [ColorTokenValue, ColorsTokenName[]][] = [
  [
    colors.blue[500],
    ['color-text-primary', 'color-input-primary', 'color-icon-primary'],
  ],
  [
    colors.secondary[500],
    ['color-text-secondary', 'color-input-secondary', 'color-icon-secondary'],
  ],
];

const convertEntriesTokensToObject = (
  Token: [ColorTokenValue, ColorsTokenName[]][]
) => {
  const objectToken: Partial<Record<ColorsTokenName, ColorTokenValue>> = {};
  Token.forEach(([colorValue, tokenNames]) => {
    tokenNames.forEach((tokenName) => {
      objectToken[tokenName] = colorValue;
    });
  });
  return objectToken;
};

export const colorsToken = convertEntriesTokensToObject(colorsEntriesTokens);

const defaultColorToken = 'inherit';

export const getToken = (tokenName: keyof typeof colorsToken) =>
  colorsToken[tokenName] ?? defaultColorToken;
