import { colors } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';

export const useCardNumberDashboardStyles = createUseStyles({
  container: {
    display: "flex",
    padding: "21px 49px",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.s5,
    borderRadius:borders.r5,
    position:"relative",
    userSelect:'none',
    cursor:"pointer",
  },
 
  blue: {
    backgroundColor:colors.blue[500],
    color:colors.blue[100],
    '&:hover > $bottomLine':{
     backgroundColor:colors.headline[500],
    }
  },
  headLine: {
    backgroundColor:colors.headline[500],
    color:colors.headline[100],
    '&:hover > $bottomLine':{
     backgroundColor:colors.headline[100],
    }
  },
  light: {
    backgroundColor:colors.light[500],
    color:colors.blue[500],
    '&:hover > $bottomLine':{
     backgroundColor:colors.blue[500],
     
    }
  },
  childrenContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: spacing.s3,
  },
  bottomLine:{
    position: "absolute",
    bottom: "0px",
    width: "100%",
    height:'15%',
    borderBottomRightRadius: borders.r5,
    borderBottomLeftRadius: borders.r5,
    backgroundColor:'transparent',
    transition: "background-color 2s ease",
    
  },
});
