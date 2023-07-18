import SignInView from '@omegup-school/ui-pages/SignInView';
import { useNavigate, Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import FacadeProvider from '@omegup-school/provider';
import { External } from '@omegup-school/provider/External';

const useExternal = (): External => {
  const navigate = useNavigate();
  return { navigation: { navigate } };
};
function App() {


  let str = '';




  return (
    <BrowserRouter>
      <FacadeProvider useExternal={useExternal}>
        <Routes>
          <Route path="" element={<SignInView />}></Route>
          <Route path="/dashboard" element={<div>dashboard</div>}></Route>
          <App>{str && <Foo />}</App>;



        </Routes>
      </FacadeProvider>
    </BrowserRouter>



  );
}




export default App;
