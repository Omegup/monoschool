import { AuthService } from '@omegup-school/auth-service';
import { Facade } from '@omegup-school/facade';
import { NavigationService } from '@omegup-school/nav-service';
import { UserController } from '@omegup-school/user-controller/UserController';
import { SignInPresenter } from '@omegup-school/user-presenter/SignInPresenter';
import { SignInUser } from '@omegup-school/user-usecases/signInUser';
import { UserAPIAdapter } from '@omegup-school/user-adapter';
import { memo } from 'react';
import { useNavigate } from 'react-router';
import { FacadeContext } from '../context';

const FacadeProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const navService = new NavigationService({ navigate });
  const authService = new AuthService(navService);
  const userGateway = new UserAPIAdapter();
  const signInUser = new SignInUser(userGateway);
  const userController = new UserController(signInUser, authService);
  const value: Facade = {
    authService,
    navService,
    signInPresenter: (handleError) => new SignInPresenter(handleError),
    userController,
    userGateway,
  };
  return (
    <FacadeContext.Provider value={value}>{children}</FacadeContext.Provider>
  );
};

export default memo(FacadeProvider);
