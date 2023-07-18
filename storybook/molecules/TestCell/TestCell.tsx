import { useState } from 'react';
import '@omegup-school/ui-cells/i18n/i18n';
import { useFacade } from '@omegup-school/hooks';
import FacadeProvider from '@omegup-school/provider';
import { External } from '@omegup-school/provider/External';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

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
const useExternal = (): External => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  return {
    navigation: { navigate },
    translation: {
      translate: t,
      currentLanguage: i18n.language,
      changeLanguage: i18n.changeLanguage,
    },
  };
};
export const TestCell = () => {
  return (
    <BrowserRouter>
      <FacadeProvider useExternal={useExternal}>
        <SubTestCell />
      </FacadeProvider>
    </BrowserRouter>
  );
};
export const SubTestCell = () => {
  const { translationService } = useFacade();

  const [lang, setLang] = useState<string>(translationService.currentLanguage);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <select
        style={{ width: 250, padding: 10 }}
        value={lang}
        onChange={(e) => {
          setLang(e.target.value);
          translationService.changeLanguage(String(e.target.value));
        }}
      >
        <option value="en">english</option>
        <option value="fr">french</option>
        <option value="ar">arabic</option>
      </select>
      <TestMolecule
        dictionary={{
          header: translationService.translateTo('signIn.email'),
          subTitle: translationService.translateTo('signIn.password'),
          title: translationService.translateTo('signIn.logIn'),
        }}
      />
    </div>
  );
};
