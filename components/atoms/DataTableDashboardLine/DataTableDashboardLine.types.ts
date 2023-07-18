export interface DataTableDashboardLineProps {
  data: DataTableProps[];
  type?: 'header' | 'body';
  color: Color;
}

export interface DataTableProps { content: string | boolean }[]

export type Color = 'lightBlue' | 'skyBlue';