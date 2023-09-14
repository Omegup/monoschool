import { IAuthService } from '@omegup-school/auth-service-port';
import { SignInUserDTO } from '@omegup-school/user-dtos/SignInUserDTO';
import { SignInUser } from '@omegup-school/user-usecases/signInUser';
import { SignInPresenter } from '@omegup-school/user-presenter/SignInPresenter';
import { IUserController } from '@omegup-school/user-controller-port/IUserController';

export class UserController implements IUserController {
  constructor(
    private signInUser: SignInUser,
    private authService: IAuthService
  ) {}

  async signIn(data: SignInUserDTO, presenter: SignInPresenter): Promise<void> {
    try {
      const user = await this.signInUser.execute(data);
      this.authService.signIn(user);
    } catch (error) {
      presenter.presentError(
        error instanceof Error
          ? error
          : new Error('Unknow error occured', { cause: error  })
      );
    }
  }
}
