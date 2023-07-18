import { Container, DataTableDashboardLine, Text, TopHeaderDataTableDashboard } from '@omegup-school/ui-atoms'
import { DataTableDashboardProps } from './DataTableDashboard.types'

export const DataTableDashboard = ({ body, header }: DataTableDashboardProps) => {
  return (
    <Container direction='column' alignItems='center'>
      {
        <TopHeaderDataTableDashboard timeText='08:00 - 9:00' nbrCourses={3}>
          <DataTableDashboardLine color={'skyBlue'} data={header} type='header' />
          <DataTableDashboardLine color={'lightBlue'} data={body} type='body' />
          <DataTableDashboardLine color={'skyBlue'} data={body} type='body' />
          <DataTableDashboardLine color={'lightBlue'} data={body} type='body' />
          <DataTableDashboardLine color={'skyBlue'} data={body} type='body' />
          <DataTableDashboardLine color={'lightBlue'} data={body} type='body' />
          <DataTableDashboardLine color={'skyBlue'} data={body} type='body' />
          <DataTableDashboardLine color={'lightBlue'} data={body} type='body' />
        </TopHeaderDataTableDashboard>
      }
    </Container >
  )
}
