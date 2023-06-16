import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  'top-search-container': {
    display: 'flex',
  },
  'tab_search': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100px',
    height: '100px',
    backgroundColor: '#F5F5F5',
    borderRadius: '10px',
    marginRight: '20px',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#E0E0E0',
    }
  },
  'tab_text': {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: '10px',
  },
  'tab_number': {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000000',
  }
});