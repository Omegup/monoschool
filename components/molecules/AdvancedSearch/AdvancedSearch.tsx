import { Chips } from '../Chips'
import { ListSearch } from '../ListSearch'
import { Switch } from '../Switch'
import { TabSearch } from '../TabSearch'
import { useStyles } from './AdvancedSearch.styles'
import { AdvancedSearchProps } from './AdvancedSearch.types'

export const AdvancedSearch = ({ chipsProps, listSearchProps, switchProps, tabsProps }: AdvancedSearchProps) => {
  const classes = useStyles();

  return (
    <div className={classes.advancedSearchContainer}>
      <TabSearch
        tabProps={tabsProps.tabProps}
        selectedIndex={tabsProps.selectedIndex}
        setSelectedIndex={tabsProps.setSelectedIndex}
      />
      <div className={classes.chipsContainer}>
        <Chips
          onCancel={chipsProps.onCancel}
          person={chipsProps.person}
        />
      </div>
      <div className={classes.switchContainer}>
        <Switch label="Sélectionner avec tous les éléments avec 'A'" checked={switchProps.checked} onChange={switchProps.onChange} />
      </div>
      <div className={classes.listSearch}>
        <ListSearch name={listSearchProps.name} description={listSearchProps.description} />
      </div>
    </div>
  )
}
