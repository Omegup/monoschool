import { createUseStyles } from 'react-jss';
import { TaskItemProps } from './TaskItem.type';
import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { borders, spacing, widths } from '@omegup-school/ui-configs/sizes';

export const colors: {
  [k in 'checked' | 'unChecked']: {
    [k in
      | 'icon'
      | 'bg'
      | 'iconBg'
      | 'text'
      | 'border']: keyof typeof colorsStyles;
  };
} = {
  checked: {
    icon: 'blue_500',
    iconBg: 'background_default',
    bg: 'blue_500',
    text: 'background_default',
    border: 'background_default',
  },
  unChecked: {
    icon: 'grey_500',
    iconBg: 'background_default',
    bg: 'background_default',
    text: 'grey_500',
    border: 'grey_500',
  },
};
export const hoverColors: {
  [k in 'checked' | 'unChecked']: {
    [k in
      | 'icon'
      | 'bg'
      | 'iconBg'
      | 'text'
      | 'border']: keyof typeof colorsStyles;
  };
} = {
  checked: {
    icon: 'blue_500',
    iconBg: 'background_default',
    bg: 'blue_500',
    text: 'background_default',
    border: 'background_default',
  },
  unChecked: {
    icon: 'background_default',
    iconBg: 'blue_500',
    bg: 'light_500',
    text: 'blue_500',
    border: 'blue_500',
  },
};
export const checking = (check: boolean) => (check ? 'checked' : 'unChecked');
export const useTaskItemStyles = createUseStyles({
  taskContainer: {
    justifyContent:'stretch',
    cursor: 'pointer',
    padding: 10,
    borderRadius: borders.r5,
    display: 'flex',
    background: ({ checked }: Partial<TaskItemProps>) =>
      colorsStyles[colors[checking(checked!)].bg],
    '&:hover': {
      '& $unhovered': {
        display: 'none',
      },
      '& $hovered': {
        display: 'flex',
      },
      background: ({ checked }: Partial<TaskItemProps>) =>
        colorsStyles[hoverColors[checking(checked!)].bg],
      '& $iconContainer': {
        background: ({ checked }: Partial<TaskItemProps>) =>
          colorsStyles[hoverColors[checking(checked!)].iconBg],
        border: ({ checked }: Partial<TaskItemProps>) =>
          `${spacing.s1}px solid ${
            colorsStyles[hoverColors[checking(checked!)].border]
          }`,
      },
      '& $textContainer': {
        color: ({ checked }: Partial<TaskItemProps>) =>
          colorsStyles[hoverColors[checking(checked!)].text],
      },
    },
  },
  iconContainer: {
    width: widths.icon.mediumSvg,
    height: widths.icon.mediumSvg,
    maxHeight: widths.icon.mediumSvg,
    maxWidth: widths.icon.mediumSvg,
    minHeight: widths.icon.mediumSvg,
    minWidth: widths.icon.mediumSvg,
    overflow: 'hidden',
    border: ({ checked }: Partial<TaskItemProps>) =>
      `${spacing.s1}px solid ${
        colorsStyles[colors[checking(checked!)].border]
      }`,
    display: 'flex',
    borderRadius: '50%',
    background: ({ checked }: Partial<TaskItemProps>) =>
      colorsStyles[colors[checking(checked!)].iconBg],
  },
  checkedtext: {
    textDecoration: 'line-through',
  },
  textContainer: {
    flex: 1,
    paddingInline: spacing.s8,
    color: ({ checked }: Partial<TaskItemProps>) =>
      colorsStyles[colors[checking(checked!)].text],
  },
  unhovered: {
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hovered: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  check: {
    '&&&&&': {
      background: colorsStyles['success_500'],
    },
    '& $iconContainer': {
      background: colorsStyles['background_default'],
      border: colorsStyles['background_default'],
    },
    '& $textContainer': {
      color: colorsStyles['background_default'],
    },
  },

  // '@keyframes check': {
  //   '0%': {
  //     background: colorsStyles['light_500'],
  //     // '& $iconContainer': {
  //     //   background: colorsStyles['blue_500'],
  //     //   border: colorsStyles['blue_500'],
  //     // },
  //     // '& $textContainer': {
  //     //   color: colorsStyles['background_default'],
  //     // },
  //   },
  //   '100%': {
  //     background: colorsStyles['success_500'],
  //     // '& $iconContainer': {
  //     //   background: colorsStyles['background_default'],
  //     //   border: colorsStyles['background_default'],
  //     // },
  //     // '& $textContainer': {
  //     //   color: colorsStyles['background_default'],
  //     // },
  //   },
  // },
});
