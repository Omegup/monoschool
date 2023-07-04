
export type TableLineSummaryProps<T> = {
  row:   {[key in keyof T] : React.ReactNode} ;

}