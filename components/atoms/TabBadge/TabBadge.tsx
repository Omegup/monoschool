import { useContainerStateSelector } from '../contexts/pointer';
import { TabBadgeProps } from './TabBadge.Types';
import { useStyles } from './TabBadge.styles';

export const TabBadge = ({ badge, selected }: TabBadgeProps) => {
  const containerStateSelector = useContainerStateSelector();
  const classes = useStyles({ theme: { containerStateSelector } });
  return (
    <>
      {badge !== undefined && (
        <span className={`${classes.tabNumber} ${selected ? classes.selected : ''}`}>{badge}</span>
      )}
    </>
  )
}
