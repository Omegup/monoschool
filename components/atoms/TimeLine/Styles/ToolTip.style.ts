import { createUseStyles } from 'react-jss';
export const useStyles = createUseStyles({
    toolTipBox: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#3DA9FC',
        height: '45%',
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: "400",
        letterSpacing: "0em",
        textAlign: "left",
        color: "#fff",
        padding: 10,
        gap: 10,
        "& *": {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
        },
        "& span": {
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
        },
        "& div": {
            display: "flex",
            gap: 2,
        },
    },
    tooltipIcon: {
        width: 50,
        height: 50,
    },
});