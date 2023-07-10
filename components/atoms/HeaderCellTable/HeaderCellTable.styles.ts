import { spacing } from "@omegup-school/ui-configs/sizes";
import { createUseStyles } from "react-jss";


export const useHeaderCellTableStyles = createUseStyles({
    cellTable: {
      padding: spacing.s5,
      display: 'flex',
      alignItems: 'center',
      gap: spacing.s5,
  },
});