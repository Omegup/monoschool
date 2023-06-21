import { colors } from '@omegup-school/ui-atoms/colors';
import { useStyles } from './Tag.styles';

export const Tag = ({ type }: { type: TagType }) => {

  const getColor = (type: TagType): { primary: string, backgroundColor: string } => {

    // const map = { success: 'success', warning: 'warning', error: 'danger', active: 'secondary', info: 'light', inactive: 'grey' };
    // const palette = colors [map[type]];
    // return { primary: colors.light[400], backgroundColor: colors.light[100] }


    switch (type) {
      case 'success':
        return { primary: colors.success[600], backgroundColor: colors.success[100] }
      case 'warning':
        return { primary: colors.warning[600], backgroundColor: colors.warning[100] }
      case 'error':
        return { primary: colors.danger[600], backgroundColor: colors.danger[100] }
      case 'active':
        return { primary: colors.secondary[600], backgroundColor: colors.secondary[100] }
      case 'info':
        return { primary: colors.blue[600], backgroundColor: colors.light[200] }
      case 'inactive':
        return { primary: colors.grey[600], backgroundColor: colors.grey[100] }
      default:
        return { primary: colors.success[600], backgroundColor: colors.success[100] }
    }
  }

  const styles = useStyles({ color: getColor(type) });
  return (
    <div className={styles.tagTextContainer}>
      <div className={styles.tagIcon}></div>
      <p className={styles.tagText}>{type}</p>
    </div>
  )
}
