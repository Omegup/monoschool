import React from 'react';
import { Column } from './Column';


export type ColumnAdornment = {
  start: React.ReactNode;
  end: React.ReactNode;
};

export type ColumnProps = {
  Column?: React.ReactNode;
};

export type Column = ReturnType<typeof Column>;
