import { Container, TabContainer } from '@omegup-school/ui-atoms';
// import { useStyles } from './TabSearch.styles';
import { TabSearchProps } from './TabSearch.types';

export const TabSearch = ({
  selectedIndex,
  setSelectedIndex,
  tabProps,
}: TabSearchProps) => {
  // const classes = useStyles();

  return (
    <Container>
      {
        tabProps.map((tabSearchData, index) => (
          <TabContainer
            key={index}
            label={tabSearchData.label}
            badge={tabSearchData.badge}
            selected={index === selectedIndex}
            onClick={() => setSelectedIndex(index)}
          />
        ))
      }
    </Container>



    // <div className={classes.topSearchContainer}>
    //   {tabProps.map((tabSearchData, index) => (
    //     <div
    //       className={`${classes.tabSearch} ${
    //         index === selectedIndex ? classes.selected : ''
    //       }`}
    //       key={index}
    //       onClick={() => setSelectedIndex(index)}
    //     >
    //       <span className={classes.tabText}>{tabSearchData.label}</span>
    //       {tabSearchData.badge !== undefined && (
    //         <span className={classes.tabNumber}>{tabSearchData.badge}</span>
    //       )}
    //     </div>
    //   ))}
    // </div>
  );
};
