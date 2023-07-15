import type { Meta, StoryObj } from '@storybook/react';
import { TaskItem } from '@omegup-school/ui-atoms';
import { useState } from 'react';
const Demo = () => {
  const [table, setTable] = useState<{ [k in number]: boolean }>({});
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[1, 2, 3].map((i) => (
        <TaskItem
          key={i.toString()}
          checked={table[i]}
          onClick={() => setTable({ ...table, [i]: !table[i] })}
          text="Organiser des activités pour favoriser le développement social"
        />
      ))}
    </div>
  );
};
const meta = {
  title: 'Atom/TaskItem',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  args: {
    checked: false,
    text: 'Organiser des activités pour favoriser le développement social',
  },
};
