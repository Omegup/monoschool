import React from 'react';
import { COLUMN_COMPONENTS } from './Column.constants';
import { CheckBoxColumn } from './ColumnsVariants/CheckBoxColumn';
import { AvatarColumn } from './ColumnsVariants/AvatarColumn';

export type ColumnVariants = typeof COLUMN_COMPONENTS ;

export type ColumnVariantType = keyof ColumnVariants ; 

export type ColumnVariant = ColumnVariants[ColumnVariantType] ;

export type ColumnChildren  = React.ReactElement<typeof COLUMN_COMPONENTS[ColumnVariantType]> 




// export type ColumnVariantProps =  {[type in ColumnVariantType] : React.ComponentProps<ColumnVariants[type]>}  ;

// export type ColumnProps = {
//   type: ColumnVariantType;
//   props: ColumnVariantProps[ColumnVariantType];
// };
