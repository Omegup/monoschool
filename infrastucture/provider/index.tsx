import { AuthService } from '@omegup-school/auth-service';
import { FacadeContext } from '@omegup-school/context';
import { Facade } from '@omegup-school/facade';
import { NavigationService } from '@omegup-school/nav-service';
import { UserAPIAdapter } from '@omegup-school/user-adapter';
import { UserController } from '@omegup-school/user-controller/UserController';
import { SignInPresenter } from '@omegup-school/user-presenter/SignInPresenter';
import { SignInUser } from '@omegup-school/user-usecases/signInUser';
import { memo } from 'react';
import { External } from './External';
import { TranslationService } from '@omegup-school/translate-service';

const FacadeProvider = ({
  children,
  useExternal,
}: {
  children: React.ReactNode;
  useExternal: () => External;
}) => {
  const external = useExternal();
  const navService = new NavigationService(external.navigation);
  console.log({ navService });
  const translationService = new TranslationService(external.translation);
  console.log({ translationService });
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
    translationService,
  };
  return (
    <FacadeContext.Provider value={value}>{children}</FacadeContext.Provider>
  );
};

export default memo(FacadeProvider);
