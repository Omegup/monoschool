import { colors } from '@omegup-school/ui-configs/colors';
import { useStyles } from './TagToggle.styles';
import { TagToggleProps, TagType } from './TagToggle.types';

export const TagToggle = ({type,label}: TagToggleProps) => {

  const getColor = (type: TagType): { primary: string, backgroundColor: string } => {
    if (type === 'info')
      return { primary: colors.blue[600], backgroundColor: colors.light[200] }
    const map = { success: 'success', warning: 'warning', error: 'danger', active: 'secondary', inactive: 'grey' } as const;
    const palette = colors[map[type]];
    return { primary: palette[600], backgroundColor: palette[100] }
  }
  console.log(type)
  const styles = useStyles({ color: getColor(type) });

  return (
    <div className={styles.tagTextContainer}>
      <div className={styles.tagIcon}></div>
      <p className={styles.tagText}>
        {label.charAt(0)?.toUpperCase() + label.slice(1)}
      </p>
    </div>
  )
}
