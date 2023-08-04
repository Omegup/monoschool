import { useStyles } from './TabLabel.styles';
import { useContainerStateSelector } from '../contexts/pointer';
import { joinClassNames } from '@omegup-school/ui-configs/typography';
import { TabLabelProps } from './TabLabel.types';

export const TabLabel = ({ label, selected }: TabLabelProps) => {
  const containerStateSelector = useContainerStateSelector();
  const classes = useStyles({ theme: { containerStateSelector } });

  return (
    <span className={joinClassNames(classes.tabText, selected && classes.selected)}>{label}</span>
  )
}
