import { InfinitScrollContainer } from '@omegup-school/ui-atoms';
import { InfinitScrollContainerProps } from '@omegup-school/ui-atoms/InfinitScrollContainer/InfinitScrollContainer.type';
import type { Meta, StoryObj } from '@storybook/react';
import { createRef, useState } from 'react';
const Demo = (
  props: Omit<
    InfinitScrollContainerProps,
    'numberOfItemToLoad' | 'itemsNumber' | 'onScrollEndReach' | 'children'
  >
) => {
  const ref = createRef<HTMLDivElement>();
  const [items, setItems] = useState(10);
  return (
    <InfinitScrollContainer
      {...props}
      direction="column"
      width={350}
      height={350}
      ref={ref}
      numberOfItemToLoad={5}
      itemsNumber={items}
      onScrollEndReach={setItems}
    >
      {Array(items)
        .fill('')
        .map((a, i) => (
          <div
            key={i}
            style={{
              width: 300,
              backgroundColor: 'red',
              marginBlock: 10,
            }}
          >
            {i}
          </div>
        ))}
    </InfinitScrollContainer>
  );
};
const meta = {
  title: 'Atom/InfinitScrollContainer',
  component: InfinitScrollContainer,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InfinitScrollContainer>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: { width: 300, height: 600 },
};
