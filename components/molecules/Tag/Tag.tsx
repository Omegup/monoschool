import { colors } from '@omegup-school/ui-atoms/colors';
import { useStyles } from './Tag.styles';

export const Tag = ({ type }: { type: TagType }) => {

  const getColor = (type: TagType): { primary: string, backgroundColor: string } => {
    switch (type) {
      case 'success':
        return { primary: colors.success[400], backgroundColor: colors.success[100] }
      case 'warning':
        return { primary: colors.warning[400], backgroundColor: colors.warning[100] }
      case 'error':
        return { primary: colors.danger[400], backgroundColor: colors.danger[100] }
      case 'active':
        return { primary: colors.secondary[400], backgroundColor: colors.secondary[100] }
      case 'info':
        return { primary: colors.light[400], backgroundColor: colors.light[100] }
      case 'inactive':
        return { primary: colors.grey[400], backgroundColor: colors.grey[100] }
      default:
        return { primary: colors.success[400], backgroundColor: colors.success[100] }
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
