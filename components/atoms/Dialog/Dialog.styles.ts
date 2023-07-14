import { createUseStyles } from 'react-jss'
import { styles } from '../common/styles'
import { DialogProps } from './Dialog.types'
import { colors } from '@omegup-school/ui-configs/colors'
import { spacing } from '@omegup-school/ui-configs/sizes'

export const useStyles = createUseStyles<string, DialogProps>({
  dialog: props => ({
    zIndex: 2,
    ...props.backdrop ? { backgroundColor: colors.background.default } : {},
    border: 0,
    position: 'fixed',
    left: props.coords.left,
    top: props.coords.top,  
    margin: 0,
    padding: 0
  }),
})
