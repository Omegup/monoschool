import { createUseStyles } from "react-jss";
import { commonBorder } from "../TableLine/TableLine.styles";
import { borders } from "@omegup-school/ui-atoms/sizes";

export const useTableLineSummaryStyles = createUseStyles({
  tableLineSummary: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: borders.r5,
    borderBottomRightRadius: borders.r5,
    backgroundColor: 'transparent',
    borderRight: commonBorder,
    borderBottom: commonBorder,
    borderLeft: commonBorder,
    maxHeight: 40,
    padding: 0,
  },

})