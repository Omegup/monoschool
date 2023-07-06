import type { Meta, StoryObj } from '@storybook/react';

import { LabeledCheckBox } from '@omegup-school/ui-molecules';
import { useEffect, useMemo, useState } from 'react';
import { LabeledCheckBoxProps } from '@omegup-school/ui-molecules/LabeledCheckBox/LabeledCheckBox.types';
import { CheckboxSize, CheckboxVariant } from '@omegup-school/ui-molecules/Internals/NakedCheckbox/NakedCheckBox.types';

const CheckboxDemo = ({
  label,
  size,
  variant,
  disabled,
  checked,
}: LabeledCheckBoxProps) => {
  const [isSelected, setIsSelected] = useState(checked);
  useEffect(() => setIsSelected(checked), [checked]);

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
    variant: { control: 'select', options: ['solid', 'border', 'scale', 'cell', 'select'] as CheckboxVariant[] },
    size: { control: 'select', options: ['large', 'medium', 'small'] as CheckboxSize[] },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    label: { control: 'text' },
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
    checked: false,
    disabled: false,
  },
};
export const Scale: Story = {
  args: {
    label: 'LabeledCheckBox',
    size: 'medium',
    variant: 'scale',
    checked: false,
    disabled: false,
  },
};
export const Cell: Story = {
  args: {
    label: 'LabeledCheckBox',
    size: 'medium',
    variant: 'cell',
    checked: false,
    disabled: false,
  },
};
export const Select: Story = {
  args: {
    label: 'LabeledCheckBox',
    size: 'medium',
    variant: 'select',
    checked: false,
    disabled: false,
  },
};
