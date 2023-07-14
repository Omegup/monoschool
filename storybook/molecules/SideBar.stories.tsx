import type { Meta, StoryObj } from '@storybook/react';

import {
  SideBar,
  SideBarProps,
} from '@omegup-school/ui-molecules';
import { SearchStatus } from '@omegup-school/ui-assets';
import { Logo } from '@omegup-school/ui-assets';
import { ArrowCircleLeft, ArrowCircleRight } from '@omegup-school/ui-assets';

type DemoType = SideBarProps & { isCollopsedS: boolean };

const SideBarDemo = ({ isCollopsedS, ...rest }: DemoType) => {
  return (
    <SideBar
      {...rest}
      firstIcon={<ArrowCircleLeft width="100%" />}
      logo={<Logo width={'100%'} />}
      SearchIcon={<SearchStatus width="100%" />}
      secandIcon={<ArrowCircleRight width="100%" />}
      children={[]}
      isCollopsed={isCollopsedS}
    />
  );
};
const meta = {
  title: 'molecule/SideBar',
  component: SideBarDemo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SideBarDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isCollopsedS: true,
    titre:"omega up"
  },
};
