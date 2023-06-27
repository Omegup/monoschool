import { colors } from "@omegup-school/ui-atoms/colors";
import { typography } from "@omegup-school/ui-atoms/typography";
import { create } from "jss";
import { createUseStyles } from "react-jss";

export const useRadioStyles = createUseStyles({
  small: {
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
    '& $radio': {
      width: 16,
      height: 16,
      '&:checked': {
        '&:after': {
          width: 7,
          height: 7
        }
      },
      '&:hover': {
        '&:after': {
          border: '8px solid ' + colors.grey[400],
        }
      }
    },
    '& $radioLabel': {
      paddingLeft: 6,
    },
  },
  medium: {
    fontSize: typography.paragraph.medium.regular.fontSize,
    fontWeight: typography.paragraph.medium.regular.fontWeight,
    '& $radio': {
      width: 20,
      height: 20,
      '&:checked': {
        '&:after': {
          width: 10,
          height: 10
        }
      },
      '&:hover': {
        '&:after': {
          border: '10px solid ' + colors.grey[400],
        }
      }
    },
    '& $radioLabel': {
      paddingLeft: 7,
    }
  },
  large: {
    fontSize: typography.paragraph.large.regular.fontSize,
    fontWeight: typography.paragraph.large.regular.fontWeight,
    '& $radio': {
      width: 24,
      height: 24,
      '&:checked': {
        '&:after': {
          width: 15,
          height: 15
        }
      },
      '&:hover': {
        '&:after': {
          border: '12px solid ' + colors.grey[400],
        }
      }
    },
    '& $radioLabel': {
      paddingLeft: 8,
    },
  },
  disabled: {
    opacity: 0.5,
  },
  radioContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  radio: {
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
      }
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
      }
    }
  },
  radioLabel: {
  },
  scaledRadio: {
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

  borderRadio: {
    // '&:checked': {
    //   backgroundColor: '#3DA9FC',
    //   borderColor: '#3DA9FC',
    // },
    // '&:not(:checked)': {
    //   backgroundColor: 'transparent',
    //   borderColor: '#91A1AF',
    // },
    // '&:hover:not(:checked)': {
    //   backgroundColor: '#2C84D8',
    //   borderColor: '#2C84D8',
    // },
    // '&:focus:not(:checked)': {
    //   backgroundColor: '#2C84D8',
    //   borderColor: '#2C84D8',
    // },
    // '&:checked::before': {
    //   content: '""',
    //   display: 'block',
    //   position: 'absolute',
    //   top: '50%',
    //   left: '50%',
    //   transform: 'translate(-50%, -50%)',
    //   width: 16,
    //   height: 16,
    //   borderRadius: '50%',
    //   backgroundColor: '#3DA9FC',
    // },
  },
});