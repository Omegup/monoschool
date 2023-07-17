import { DashboardDetailedCard } from '@omegup-school/ui-molecules';
import type { Meta, StoryObj } from '@storybook/react';

const Demo = () => {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <DashboardDetailedCard
        description="Le principe de cette activité d'intégration étudiants originale et sympa."
        subTitle="Journée d’intégration"
        title="Évènements"
        variant="info"
        footerTitle="Détails"
        address="Zarzis Médenine Tunisie"
        date="24/01/2023"
        hoverIcon="CalendarCircle"
        hoverText="Ajouter un évènements"
      />
      <DashboardDetailedCard
        description="Viens jouer. Amusez vous. Découvre la musique en t'amusant. Viens jouer.  Viens jouer. Amusez vous. Découvre la musique en t'amusant. Viens jouer. "
        subTitle="Lancement de Club"
        title="Actualités"
        variant="danger"
        footerTitle="Détails"
        address="Zarzis Médenine Tunisie"
        date="10/01/2023"
        hoverIcon="MenuBoard"
        hoverText="Ajouter une actualité"
      />
      <DashboardDetailedCard
        description="C’est l’anniversaire de l’élève du classe 2-A Mouhamed ben Massoud."
        subTitle="Fête d’anniversaire"
        title="Bientôt"
        variant="standart"
        footerTitle="Détails"
        address="Zarzis Médenine Tunisie"
        date="31/01/2023"
        hovrable={false}
      />
    </div>
  );
};
const meta = {
  title: 'Molecules/DashboardDetailedCard',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    description:
      "Viens jouer. Amusez vous. Découvre la musique en t'amusant. Viens jouer.  Viens jouer. Amusez vous. Découvre la musique en t'amusant. Viens jouer. ",
    subTitle: 'Lancement de Club',
    title: 'Actualités',
    variant: 'danger',
    footerTitle: 'Détails',
    address: 'Zarzis, Médenine, Tunisie',
    date: '31/01/2023',
    hoverIcon: 'CalendarCircle',
    hoverText: 'Ajouter une actualité',
  },
};
