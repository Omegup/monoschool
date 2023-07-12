export interface TagProps {
  type: TagType;
  label : string;
}

type TagType = 'success' | 'warning' | 'error' | 'active' | 'info' | 'inactive'
