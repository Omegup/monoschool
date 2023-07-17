import { createUseStyles } from 'react-jss'
import { DialogProps } from './Dialog.types'
import { colors } from '@omegup-school/ui-configs/colors'

export const useStyles = createUseStyles<string, DialogProps>({
  dialog: props => ({
    zIndex: 2,
    ...props.backdrop ? { backgroundColor: colors.background.default } : {},
    border: /*props.border ? [1, 'solid', colors.grey[300]] : */0,
    position: 'absolute',
    left: props.coords.left,
    top: props.coords.top,  
    margin: 0,
    padding: 0
  }),
})
