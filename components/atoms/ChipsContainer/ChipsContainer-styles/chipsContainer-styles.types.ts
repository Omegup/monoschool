import { InteractiveStates } from '../../common/InteractiveStyles';

export type ChipsStatus = 'checked' | 'unchecked';

export type ChipsVariant =  'border' | 'flat';
export type ChipsSize = 'small' | 'medium' | 'large';

export type ChipsStateTheme = {
  chipsOutlineColor?: string;
  chipsBorderColor?: string;
  chipsBackgroundColor?: string;
  ChipsColor?: string;
  chipsOpacity?: number;
  chipsOutlineWidth?:number;
  chispOutlineStyle?:string;
};


export type ChipsVariantTheme = {
  [Status in ChipsStatus]: {
    [Interaction in InteractiveStates]: ChipsStateTheme;
  };
};

export type ChipsTheme = {
  [Variant in ChipsVariant]: ChipsVariantTheme;
};
