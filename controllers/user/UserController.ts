import { authService } from '@omegup-school/auth-service';
import { SignInUserDTO } from '@omegup-school/user-dtos/SignInUserDTO';
import { SignInUser } from '@omegup-school/user-usecases/signInUser';
import { SignInPresenter } from '@omegup-school/user-presenter/SignInPresenter';

export class UserController {
  constructor(private signInUser: SignInUser) {}

  async signIn(data: SignInUserDTO, presenter: SignInPresenter): Promise<void> {
    try {
      const user = await this.signInUser.execute(data);
      authService.signIn(user);
    } catch (error) {
      presenter.presentError(error);
    }
  }
}
