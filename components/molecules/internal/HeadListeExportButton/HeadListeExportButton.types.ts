import { MouseEvent } from 'react';

export interface HeadListeExportButtonProps {
label:string
icon:JSX.Element
}
export interface ControlledHeadListeExportButtonProps extends HeadListeExportButtonProps {
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}
