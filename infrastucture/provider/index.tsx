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

type ErrorEvent = readonly [
  name: string,
  error: { message: string },
  ...etc: unknown[]
];

const FacadeProvider = ({
  children,
  useExternal,
}: {
  children: React.ReactNode;
  useExternal: () => External;
}) => {
  const external = useExternal();
  const navService = new NavigationService(external.navigation);
  const authService = new AuthService(navService);
  const userGateway = new UserAPIAdapter();
  const signInUser = new SignInUser(userGateway);
  const userController = new UserController(signInUser, authService);
  const wrapErrorHandler =
    <TErrorEvent extends ErrorEvent>(
      handleError: (...error: TErrorEvent) => void
    ) =>
    (...error: TErrorEvent) => {
      if (error[0] === 'root') {
        alert(error[1].message);
      }
      handleError(...error);
    };
  const wrapPresenter =
    <TErrorEvent extends ErrorEvent, TPresenter>(
      Constructor: new (
        handleError: (...error: TErrorEvent) => void
      ) => TPresenter
    ) =>
    (handleError: (...error: TErrorEvent) => void) =>
      new Constructor(wrapErrorHandler(handleError));
  const value: Facade = {
    authService,
    navService,
    signInPresenter: wrapPresenter(SignInPresenter),
    userController,
    userGateway,
  };
  return (
    <FacadeContext.Provider value={value}>{children}</FacadeContext.Provider>
  );
};

export default memo(FacadeProvider);
