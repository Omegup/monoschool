import { NakedInput } from '@omegup-school/ui-atoms';
import { Field, colors } from '@omegup-school/ui-molecules/internal/Field';
import { FieldProps } from '@omegup-school/ui-molecules/internal/Field/Field.type';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const Demo = ({ input, ...props }: FieldProps) => {
  const [text, setText] = useState('Input');

  return (
    <div style={{ width: 350 }}>
      <Field
        input={
          <NakedInput
            placeholder="Input"
            disabled={props.disabled}
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            border="s10"
            borderColor={colors[props.color]}
          />
        }
        {...props}
      />
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
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: {
    color: 'default',
    descriptionText: 'This is the description area',
    disabled: false,
    infoText: 'This is a message',
    label: 'Field Label',
    required: true,
    variant: 'spaced',
  },
};
