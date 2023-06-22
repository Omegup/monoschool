import { IAuthService } from '@omegup-school/auth-service-port';
import { INavigationService } from '@omegup-school/nav-service-port';
import {
  ISignInPresenter,
  SignInErrorHandler,
} from '@omegup-school/user-presenter-port/SignInPresenter';
import { UserGateway } from '@omegup-school/user-gateway';
import { IUserController } from '@omegup-school/user-controller-port/IUserController';

export interface Facade {
  navService: INavigationService;
  authService: IAuthService;
  userGateway: UserGateway;
  signInPresenter: (handleError: SignInErrorHandler) => ISignInPresenter;
  userController: IUserController;
}
