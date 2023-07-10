import { IAuthService } from '@omegup-school/auth-service-port';
import { SignInUserDTO } from '@omegup-school/user-dtos/SignInUserDTO';
import { SignInUser } from '@omegup-school/user-usecases/signInUser';
import { ISignInPresenter, SignInErrorHandler } from '@omegup-school/user-presenter-port/SignInPresenter';
import { IUserController } from '@omegup-school/user-controller-port/IUserController';
import { Either } from 'omegup-school';

export class UserController implements IUserController {
  constructor(
    private signInUser: SignInUser,
    private authService: IAuthService,
    private presenter: ISignInPresenter
  ) {}

  signIn = async (
    data: SignInUserDTO,
    handleError: SignInErrorHandler
  ): Promise<Either<void, 'login' | 'network' | 'unknown'>> => {
    const signInResult = await this.signInUser.execute(data);
    if (signInResult.ok) {
      this.authService.signIn(signInResult.result);
      return { ok: true };
    }
    const presentError = this.presenter.presentError(handleError)
    switch (signInResult.error) {
      case 'login':
        presentError('email', { message: 'Login Error' });
        return signInResult;
      case 'network':
        presentError('root', { message: 'Network Error' });
        return signInResult;
      case 'unknown':
        presentError('root', { message: 'Unknow Error' });
        return signInResult;
    }
  }
}
