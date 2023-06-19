import { Column } from './Column';

export type ColumnAdornment = {
  start: React.ReactNode;
  end: React.ReactNode;
};

export type ColumnProps = {
  Adornment?: Partial<ColumnAdornment>;
  currencyFormat?: (amount: string) => string;
  text: string;
};

export type Column = ReturnType<typeof Column>;
