import { colors } from '@omegup-school/ui-atoms/colors';
import { useStyles } from './Tag.styles';

export const Tag = ({ type }: { type: TagType }) => {

  const getColor = (type: TagType): { primary: string, backgroundColor: string } => {

    if (type === 'info') {
    return { primary: colors.blue[600], backgroundColor: colors.light[200] }
      
    }
    const map = { success: 'success', warning: 'warning', error: 'danger', active: 'secondary', inactive: 'grey' } as const;
    const palette = colors [map[type]];
    return { primary: palette[600], backgroundColor: palette[100] }

  }

  const styles = useStyles({ color: getColor(type) });
  return (
    <div className={styles.tagTextContainer}>
      <div className={styles.tagIcon}></div>
      <p className={styles.tagText}>{type}</p>
    </div>
  )
}
