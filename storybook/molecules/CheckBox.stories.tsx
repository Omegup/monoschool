import type { Meta, StoryObj } from '@storybook/react';

import { LabeledCheckBox } from '@omegup-school/ui-molecules';
import { useState } from 'react';
import { LabeledCheckBoxProps } from '@omegup-school/ui-molecules/LabeledCheckBox/LabeledCheckBox.types';

const CheckboxDemo = ({
  label,
  size,
  variant,
  disabled,
  checked,
}: LabeledCheckBoxProps) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <LabeledCheckBox
      checked={isSelected}
      onChange={() => setIsSelected(!isSelected)}
      {...{ label, size, variant, disabled, }}
    />
  );
};


const meta = {
  title: 'Molecules/CheckBox',
  component: CheckboxDemo,
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof CheckboxDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    label: 'LabeledCheckBox',
    size: 'medium',
    variant: 'solid',
    disabled: false,
    checked: true,
  },
};
export const Border: Story = {
  args: {
    label: 'LabeledCheckBox',
    size: 'medium',
    variant: 'border',
    checked: true,
    disabled: false,
  },
};
export const Scale: Story = {
  args: {
    label: 'LabeledCheckBox',
    size: 'medium',
    variant: 'scale',
    checked: true,
    disabled: false,
  },
};
export const Cell: Story = {
  args: {
    label: 'LabeledCheckBox',
    size: 'medium',
    variant: 'cell',
    checked: true,
    disabled: false,
  },
};
