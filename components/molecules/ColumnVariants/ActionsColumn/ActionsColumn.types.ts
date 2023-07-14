import React from 'react';

export interface ActionsColumnProps {
  actions: Array<{
    icon: React.ReactNode;
    rowId: number;
    callBackFn: (rowId: number) => void;
  }>;
}
