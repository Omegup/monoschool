import { ReactElement } from 'react';

export type FilterListeButtonProps = {
  data:{
    showIcon: boolean;
    label: string;
    icon: ReactElement;
    active: boolean;
    onClick:(e:Event)=>void;
  }[];

};
