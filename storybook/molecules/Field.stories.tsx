import {
  NakedInput,
  NakedTextArea,
} from '@omegup-school/ui-atoms';
import { Field } from '@omegup-school/ui-molecules/internal/Field';
import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { FieldProps } from '@omegup-school/ui-molecules/internal/Field/Field.type';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Icon } from '@omegup-school/ui-atoms/Icon';
import * as icons from '@omegup-school/ui-assets/icons';
import { FIELD_COLORS } from '@omegup-school/ui-atoms/constants/FieldColors.cnst';

const Demo = ({
  input,
  endIcon,
  startIcon,
  ...props
}: Omit<FieldProps, 'input' | 'endIcon' | 'startIcon'> & {
  input: 'input' | 'textArea';
  startIcon: keyof typeof icons;
  endIcon: keyof typeof icons;
}) => {
  const [text, setText] = useState('');

  const inputs = {
    input: (
      <NakedInput
        {...(endIcon
          ? {
              endIcon: (
                <Icon
                  height="24"
                  width="24"
                  name={endIcon}
                  color={colorsStyles['grey_400']}
                />
              ),
            }
          : {})}
        {...(startIcon
          ? {
              startIcon: (
                <Icon
                  height="24"
                  width="24"
                  name={startIcon}
                  color={colorsStyles['grey_400']}
                />
              ),
            }
          : {})}
        placeholder="Input"
        disabled={props.disabled}
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        border="b2"
        borderColor={FIELD_COLORS[props.color]}
      />
    ),
    textArea: (
      <NakedTextArea
        {...(endIcon
          ? {
              endIcon: (
                <Icon
                  height="24"
                  width="24"
                  name={endIcon}
                  color={colorsStyles['grey_400']}
                />
              ),
            }
          : {})}
        {...(startIcon
          ? {
              startIcon: (
                <Icon
                  height="24"
                  width="24"
                  name={startIcon}
                  color={colorsStyles['grey_400']}
                />
              ),
            }
          : {})}
        placeholder="Input"
        disabled={props.disabled}
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        border="b2"
        borderColor={FIELD_COLORS[props.color]}
      />
    ),
  };
  return (
    <div style={{ width: 350 }}>
      <Field input={inputs[input]} {...props} />
    </div>
  );
};

const meta = {
  title: 'Atom/Field',
  component: Field,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['spaced', 'condensed'],
    },
    color: {
      control: 'select',
      options: ['error', 'info', 'success', 'warning', 'default'],
    },
    input: {
      control: 'select',
      options: ['input', 'textArea' /*, 'dropDown'*/],
    },
    startIcon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    endIcon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: {
    variant: 'spaced',
    input: 'input',
    color: 'default',
    required: true,
    descriptionText: 'This is the description area',
    disabled: false,
    infoText: 'This is a message',
    label: 'Field Label',
  },
};
