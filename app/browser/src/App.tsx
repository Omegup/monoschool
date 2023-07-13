import SignInView from '@omegup-school/ui-pages/SignInView';
import { useNavigate, Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import FacadeProvider from '@omegup-school/provider';
import { External } from '@omegup-school/provider/External';
import { useTranslation } from 'react-i18next';

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
function App() {
  return (
    <BrowserRouter>
      <FacadeProvider useExternal={useExternal}>
        <Routes>
          <Route path="" element={<SignInView />}></Route>
          <Route path="/dashboard" element={<div>dashboard</div>}></Route>
        </Routes>
      </FacadeProvider>
    </BrowserRouter>
  );
}

export default App;
