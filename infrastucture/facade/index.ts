import { IAuthService } from '@omegup-school/auth-service-port';
import { INavigationService } from '@omegup-school/nav-service-port';
import { ISignInPresenter } from '@omegup-school/user-presenter-port/SignInPresenter';
import { UserGateway } from '@omegup-school/user-gateway';
import { IUserController } from '@omegup-school/user-controller-port/IUserController';
import { ITranslationService } from '@omegup-school/translate-service-port';

export interface Facade {
  navService: INavigationService;
  translationService: ITranslationService;
  authService: IAuthService;
  userGateway: UserGateway;
  signInPresenter: (handleError: (error: Error) => void) => ISignInPresenter;
  userController: IUserController;
}
