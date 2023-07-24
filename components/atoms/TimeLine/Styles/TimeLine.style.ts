import { createUseStyles } from 'react-jss';
export const useStyles = createUseStyles({
    main: {
        position: 'relative',
        margin: '25vh',
        backgroundColor: '#3DA9FC33',
        height: 123,
        width: 640,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        paddingBlock: 10,
        paddingInline: 0,
        fontFamily: 'Poppins',
        '& *': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            fontSize: 14,
            fontWeight: 400,
        },
        '& h3': {
            fontSize: 16,
            fontWeight: 500,
        },
    },
    top: {
        width: '93%',
        height: '39%',
    },
    bottom: {
        width: '93%',
        height: '19.5%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    root: {
        width: '93%',
        height: '24%',
        backgroundColor: '#094067',
        borderRadius: 10,
        position: 'relative'
    },
    monthArea: {
        position: 'absolute',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: "center",
        '& span': {
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
        }
    },
    progress: {
        position: 'absolute',
        borderRadius: 10,
        height: '100%',
        backgroundColor: '#3DA9FC',
        zIndex: 10
    },
    iconStyle: {
        height: 22,
        width: 22
    }
});