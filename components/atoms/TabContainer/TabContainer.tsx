import { ContainerStateContext } from '../contexts/pointer';
import { useStyles } from './TabContainer.styles';
import { TabSearchProps } from './TabContainer.types';

export const TabContainer = ({ selected, children }: TabSearchProps) => {
  const classes = useStyles();
  return (
    <div className={`${classes.topSearchContainer}  ${selected ? classes.selected : ''}`}>
      <div
        className={`${classes.tabSearch}`}
      >
        <ContainerStateContext.Provider value={classes.topSearchContainer}>
          {children}
        </ContainerStateContext.Provider>
      </div>
    </div>
  )
}
