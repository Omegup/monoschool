import React from 'react'
import { HeaderCellTableProps } from './HeaderCellTable.types'
import { useStyles } from './HeaderCellTable.styles';
import { ArrowDownSecond, ArrowUpSecond } from '@omegup-school/ui-assets';
import { colors } from '@omegup-school/ui-atoms/colors';

export const HeaderCellTable = ({ label, isSortable: isSortable = false }: HeaderCellTableProps) => {
  const classes = useStyles();
  return (
    <div className={classes.cellContainer}>
      <div className={classes.cellLabel}>{label}</div>
      <div className={classes.cellSort}>
        <div className={classes.cellSortIcon}>
          {isSortable && (
            <>
              <>
                <ArrowUpSecond width='8.75' height='8.75' color={colors.blue[500]}/>
              </>
              <>
                <ArrowDownSecond width='8.75' height='8.75' color={colors.blue[500]}/>
              </>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
