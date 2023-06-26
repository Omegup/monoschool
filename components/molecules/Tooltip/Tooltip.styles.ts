import { colors } from '@omegup-school/ui-atoms/colors'
import { borders, spacing } from '@omegup-school/ui-atoms/sizes'
import { widths } from '@omegup-school/ui-atoms/sizes/widths'
import { createUseStyles } from 'react-jss'
import { styles } from '../common/styles'
import { TooltipProps } from './Tooltip.types'

type Sizes = readonly [
  `$${TooltipProps['size']}>$container>&`,
  { width: string; height: string }
]
const checkboxSizes = Object.fromEntries<'', Record<'', Sizes>>(
  Object.entries(widths.checkbox).map(([k, v]) => [
    `$${k}>$container>&`,
    {
      width: v,
      height: v,
    },
  ])
)

export const useSelectStyles = createUseStyles({
  solid: {},
  border: {},
  flat: {},
  text: {},
  large: {},
  medium: {},
  small: {},
  disabled: {},
  enabled: {},
  input: {
    clip: 'rect(0 0 0 0)',
    position: 'absolute',
  },
  label: {
    display: 'flex',
    borderRadius: borders.r5,
    '&:focus': {
      outline: 'none'
    },
    '&:focus-within:not(:focus) > $input': {
      '& + $container': {
        outlineWidth: borders.b5,
        outlineColor: 'currentcolor',
        outlineStyle: 'solid',
      },
      '&:not(:checked) + $container': {
        color: colors.blue[500],
      },
    },
    '&:hover > $input:checked + $container': {
      backgroundColor: colors.blue[600],
      '& $tick': {
        color: colors.blue[600],
        opacity: 0.6,
      },
    },
    '&:hover > $input:not(:checked) + $container': {
      color: colors.blue[500],
      background: colors.light[500],
      '& $tick': {
        opacity: 0.4,
      },
    },

    '&:active': {
      '&:hover > $input:checked + $container': {
        '& $tick': {
          opacity: 0,
        },
      },
      '&:hover > $input:not(:checked) + $container': {
        background: colors.background.default,
        '& $tick': {
          opacity: 1,
        },
      },
      '& > $input:checked + $container': {
        backgroundColor: colors.blue[500],
        '& $tick': {
          color: colors.blue[500],
          opacity: 1,
        },
      },
      '& > $input:not(:checked) + $container': {
        color: colors.blue[500],
        outlineWidth: borders.b5,
        outlineColor: 'currentcolor',
        outlineStyle: 'solid',
        '& $tick': {
          opacity: 0,
        },
      },
    },
  },
  triangle: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '5px 5px 0',
    borderColor: [colors.blue[500], 'transparent'],
  },
  container: {
    // position: 'relative',
    color: colors.background.default,
    backgroundColor: colors.blue[500],
    paddingBlock: spacing.s4,
    paddingInline: spacing.s2,
    borderRadius: borders.r5,

    //   '&:after': {
    //     content: '""',
    //     position: 'absolute',
    //     borderStyle: 'solid',
    //     borderWidth: '5px 5px 0',
    //     borderColor: [colors.blue[500], 'transparent'],
    //     bottom: -5,
    // },
    '$medium > &': {
      padding: spacing.s4,
      borderRadius: borders.r5,
    },
  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
  square: {},
})
