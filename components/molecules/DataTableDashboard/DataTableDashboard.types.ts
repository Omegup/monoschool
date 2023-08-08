export interface DataTableDashboardProps {
  header: {
    content: string;
    type: 'boolean' | 'string';
  }[],
  body: {
    content: string | boolean;
  }[]
}
