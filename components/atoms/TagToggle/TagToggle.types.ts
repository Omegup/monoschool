export type TagToggleProps = {
  type?: TagType;
  label? : string;
};

export type TagType = 'success' | 'warning' | 'error' | 'active' | 'info' | 'inactive'