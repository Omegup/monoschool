import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from '@omegup-school/ui-atoms';
import { TextWithIconProps } from '@omegup-school/ui-molecules/TextWithIcon/TextWithIcon.types';
import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from '../molecules/Icon';

const Demo = ({
  firstIcon,value,
  ...restProps
}: Omit<TextWithIconProps, 'firstIcon'> & {
  firstIcon: keyof typeof icons;
}) => {
  return (
    <SearchBar
      firstIcon={<Icon name={firstIcon} />}
      secondIcon={<Icon name={"Close"} />}
      value={value}
      placeholder={'Recherche'}
      CloseOnClick={() => console.log('delete')}
      onChange={(value) => console.log(value)}
      variant={'navBar'}
      displayClose={true}
      inputType={'text'}
      {...restProps}    />
  );
};
const meta = {
  title: 'Atom/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    firstIcon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    secondIcon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: {
    text: 'Text Description',
    secondIcon: <Icon name={'Close'} />,
    firstIcon: 'SearchStatus',
    value:''
  },
};
