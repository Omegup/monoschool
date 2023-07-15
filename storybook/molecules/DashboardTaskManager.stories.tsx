import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DashboardTaskManager } from '@omegup-school/ui-molecules';
import { DashboardTaskManagerProps } from '@omegup-school/ui-molecules/DashboardTaskManager/DashboardTaskManager.type';
import * as avatars from '@omegup-school/ui-assets/images';

const Demo = () => {
  const personnels: DashboardTaskManagerProps['personnel'] = [
    {
      id: '1',
      img: avatars['avatarSam'],
    },
    {
      id: '2',
      img: avatars['avatarJoey'],
    },
    {
      id: '3',
      img: avatars['avatarJenna'],
    },
    {
      id: '4',
      img: avatars['avatarLaila'],
    },
    {
      id: '5',
      img: avatars['avatarCamela'],
    },
  ];
  const list: Omit<DashboardTaskManagerProps['list'][0], 'checked'>[] = [
    {
      id: '1',
      text: 'Organiser des activités pour favoriser le développement social',
    },
    {
      id: '2',
      text: 'Organiser des activités pour favoriser le développement social',
    },
    {
      id: '3',
      text: 'Organiser des activités pour favoriser le développement social',
    },
    {
      id: '4',
      text: 'Organiser des activités pour favoriser le développement social',
    },
    {
      id: '5',
      text: 'Organiser des activités pour favoriser le développement social',
    },
  ];
  const [displayedPersonnel, setDisplayedPersonnel] = useState<string>('1');
  const [data, setData] = useState<
    { personnelId: string; list: DashboardTaskManagerProps['list'] }[]
  >(
    personnels.map((p) => ({
      personnelId: p.id,
      list: list.map((l) => ({ ...l, checked: false })),
    }))
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <DashboardTaskManager
        dictionary={{
          label: 'Tâches d’aujourd’hui ',
          finishedTaskText: 'Tache terminer',
        }}
        personnel={personnels}
        onPersonnelClick={(id: string) => {
          setDisplayedPersonnel(id);
        }}
        onTaskClick={(id: string) => {
          const index = data.findIndex(
            (p) => p.personnelId === displayedPersonnel
          );
          const taskIndex = data[index].list.findIndex((l) => l.id === id);
          const _data = [...data];
          const list = _data[index].list;
          list.splice(taskIndex, 1, {
            ...data[index].list[taskIndex],
            checked: !data[index].list[taskIndex].checked,
          });
          _data.splice(index, 1, {
            personnelId: data[index].personnelId,
            list: list,
          });
          setData(_data);
        }}
        list={
          data.find((d) => d.personnelId === displayedPersonnel)?.list || []
        }
        selectedPersonel={displayedPersonnel}
      />
    </div>
  );
};
const meta = {
  title: 'Molecule/DashboardTaskManager',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  args: {},
};
