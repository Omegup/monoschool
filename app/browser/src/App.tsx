import SignInView from '@omegup-school/user-page/SignInView';
import { useNavigate, Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import FacadeProvider from '@omegup-school/provider';
import { External } from '@omegup-school/provider/External';

const useExternal = (): External => {
  const navigate = useNavigate();
  return { navigation: { navigate } };
};
function App() {
  return (
    <BrowserRouter>
      <FacadeProvider useExternal={useExternal}>
        <Routes>
          <Route path="" element={<SignInView></SignInView>}></Route>
          <Route path="/dashboard" element={<div>dashboard</div>}></Route>
        </Routes>
      </FacadeProvider>
    </BrowserRouter>
  );
}

export default App;
