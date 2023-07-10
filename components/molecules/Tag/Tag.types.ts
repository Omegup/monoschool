export interface TagProps {
  type: TagType;
}

type TagType = 'success' | 'warning' | 'error' | 'active' | 'info' | 'inactive'