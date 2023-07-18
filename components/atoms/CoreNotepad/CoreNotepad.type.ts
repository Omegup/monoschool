import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { borders } from '@omegup-school/ui-configs/sizes';
import { typoStyles } from '@omegup-school/ui-configs/typography';
import { ReactNode } from 'react';

export interface CoreNotepadProps {
  startIcon?: ReactNode;
  disabled?: boolean;
  textVariant?: keyof typeof typoStyles;
  placeholder?: string;
}

export interface ControlleCoreNotepadProps extends CoreNotepadProps {
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlure:(e: React.ChangeEvent<HTMLTextAreaElement>)=>void;
}
