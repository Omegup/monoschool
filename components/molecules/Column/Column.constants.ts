import { AvatarColumn } from './ColumnsVariants/AvatarColumn';
import { CheckBoxColumn } from './ColumnsVariants/CheckBoxColumn';
import { CurrencyColumn } from './ColumnsVariants/CurrencyColumn';
import { IconColumn } from './ColumnsVariants/IconColumn';
import { TagColumn } from './ColumnsVariants/TagColumn';
import { TextColumn } from './ColumnsVariants/TextColumn';

export const COLUMN_COMPONENTS = {
  text: TextColumn,
  currency: CurrencyColumn,
  checkbox: CheckBoxColumn,
  avatar: AvatarColumn,
  icon: IconColumn,
  tag: TagColumn,
} as const;

export {
  TextColumn,
  CurrencyColumn,
  CheckBoxColumn,
  AvatarColumn,
  IconColumn,
  TagColumn,
};
