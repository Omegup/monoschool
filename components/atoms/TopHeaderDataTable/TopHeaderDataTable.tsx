import React from 'react'
import { TopHeaderDataTableProps } from './TopHeaderDataTable.types'
import { useStyles } from './TopHeaderDataTable.styles'
import { ArrowCircleLeft, ArrowCircleRight, VideoTime } from '@omegup-school/ui-assets';
import { colors } from '@omegup-school/ui-configs/colors';

export const TopHeaderDataTableDashboard = ({ children, nbrCourses,timeText }: TopHeaderDataTableProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.topBarContainer}>
        <div className={classes.subContainerTopBar}>
          <VideoTime color={colors.blue[100]} />
          <span className={classes.textTop}>{nbrCourses} Cours actuel</span>
        </div>
        <div className={classes.subContainerTopBar}>
          <ArrowCircleLeft color={colors.blue[100]} />
          <span className={classes.textTop}>{timeText}</span>
          <ArrowCircleRight color={colors.blue[100]} />
        </div>
      </div>
      {children}
    </div>
  )
}
