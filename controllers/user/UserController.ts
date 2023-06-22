import { IAuthService } from '@omegup-school/auth-service-port';
import { SignInUserDTO } from '@omegup-school/user-dtos/SignInUserDTO';
import { SignInUser } from '@omegup-school/user-usecases/signInUser';
import { SignInPresenter } from '@omegup-school/user-presenter/SignInPresenter';
import { IUserController } from '@omegup-school/user-controller-port/IUserController';
import { Either } from 'omegup-school';

export class UserController implements IUserController {
  constructor(
    private signInUser: SignInUser,
    private authService: IAuthService
  ) {}

  async signIn(
    data: SignInUserDTO,
    presenter: SignInPresenter
  ): Promise<Either<void, 'login' | 'network' | 'unknown'>> {
    const signInResult = await this.signInUser.execute(data);
    if (signInResult.ok) {
      this.authService.signIn(signInResult.result);
      return { ok: true };
    }
    switch (signInResult.error) {
      case 'login':
        presenter.presentError('email', { message: 'Login Error' });
        return signInResult;
      case 'network':
        presenter.presentError('root', { message: 'Network Error' });
        return signInResult;
      case 'unknown':
        presenter.presentError('root', { message: 'Unknow Error' });
        return signInResult;
    }
  }
}
