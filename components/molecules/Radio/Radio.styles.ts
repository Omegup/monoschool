import { colors } from '@omegup-school/ui-configs/colors';
import { typoStyles } from '@omegup-school/ui-configs/typography';
import { createUseStyles } from 'react-jss';

export const useRadioStyles = createUseStyles({
  small: {
    ...typoStyles.paragraph_xSmall_regular,
    '& $radio': {
      width: 16,
      height: 16,
      '&:checked': {
        '&:after': {
          width: 7,
          height: 7,
        },
      },
      '&:hover': {
        '&:after': {
          border: '8px solid ' + colors.grey[400],
        },
      },
    },
    '& $radioLabel': {
      paddingLeft: 6,
    },
  },
  medium: {
    ...typoStyles.paragraph_xSmall_regular,
    '& $radio': {
      width: 20,
      height: 20,
      '&:checked': {
        '&:after': {
          width: 10,
          height: 10,
        },
      },
      '&:hover': {
        '&:after': {
          border: '10px solid ' + colors.grey[400],
        },
      },
    },
    '& $radioLabel': {
      paddingLeft: 7,
    },
  },
  large: {
    ...typoStyles.paragraph_xSmall_regular,
    '& $radio': {
      width: 24,
      height: 24,
      '&:checked': {
        '&:after': {
          width: 15,
          height: 15,
        },
      },
      '&:hover': {
        '&:after': {
          border: '12px solid ' + colors.grey[400],
        },
      },
    },
    '& $radioLabel': {
      paddingLeft: 8,
    },
  },
  disabled: {
    opacity: 0.5,
    '& $radio': {
      '&:hover': {
        '&:after': {
          border: 'none',
        },
      },
      '&:after': {
        border: 'none',
      },
    },
  },
  radioContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  radio: {},
  radioLabel: {},

  borderRadio: {
    // accentColor: colors.blue[500],
    // '&:hover': {
    //   accentColor: colors.blue[600],
    // }
  },
  scaledRadio: {
    '&:checked': {
      '&:after': {
        content: '""',
        borderRadius: '50%',
        top: -2,
        left: -1,
        position: 'relative',
        backgroundColor: 'white',
        display: 'inline-block',
        visibility: 'visible',
        border: '6px solid ' + colors.blue[500],
      },
      '&:hover': {
        '&:after': {
          border: '6px solid ' + colors.blue[600],
        },
      },
    },
    '&:hover': {
      '&:after': {
        content: '""',
        borderRadius: '50%',
        top: 0,
        left: 0,
        position: 'relative',
        backgroundColor: colors.grey[400],
        display: 'inline-block',
        visibility: 'visible',
      },
    },
    '&$disabled': {
      '&:after': {
        border: 'none',
      },
    },
    // '&:checked': {
    //   background: 'none',
    //   borderColor: '#2C84D8',
    // },
    // '&:not(:checked)': {
    //   background: 'none',
    //   borderColor: '#91A1AF',
    // },
    // '&:hover:not(:checked)': {
    //   background: 'none',
    //   borderColor: '#2C84D8',
    // },
    // '&:focus:not(:checked)': {
    //   background: 'none',
    //   borderColor: '#2C84D8',
    // },
    // '&:checked::before': {
    //   content: '""',
    //   borderRadius: '50%',
    //   backgroundColor: '#2C84D8',
    // },
  },
});