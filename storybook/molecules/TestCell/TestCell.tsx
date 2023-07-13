import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@omegup-school/ui-cells/i18n/i18n';

const TestMolecule = ({
  dictionary,
}: {
  dictionary: { header: string; title: string; subTitle: string };
}) => {
  return (
    <>
      <h1>{dictionary.header}</h1>
      <h1>{dictionary.title}</h1>
      <h1>{dictionary.subTitle}</h1>
    </>
  );
};

export const TestCell = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <select
        style={{ width: 250, padding: 10 }}
        value={lang}
        onChange={(e) => {
          setLang(e.target.value);
          i18n.changeLanguage(String(e.target.value));
        }}
      >
        <option value="en">english</option>
        <option value="fr">french</option>
        <option value="ar">arabic</option>
      </select>
      <TestMolecule
        dictionary={{
          header: t('signIn.email'),
          subTitle: t('signIn.password'),
          title: t('signIn.logIn'),
        }}
      />
    </div>
  );
};
