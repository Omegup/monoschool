import { IAuthService } from '@omegup-school/auth-service-port';
import { INavigationService } from '@omegup-school/nav-service-port';
import { IUserController } from '@omegup-school/user-controller-port/IUserController';
import { UserGateway } from '@omegup-school/user-gateway';
import {
  ISignInPresenter
} from '@omegup-school/user-presenter-port/SignInPresenter';

export interface Facade {
  navService: INavigationService;
  authService: IAuthService;
  userGateway: UserGateway;
  signInPresenter: ISignInPresenter;
  userController: IUserController;
}
