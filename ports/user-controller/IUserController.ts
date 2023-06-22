import { SignInUserDTO } from '@omegup-school/user-dtos/SignInUserDTO';
import { ISignInPresenter } from '@omegup-school/user-presenter-port/SignInPresenter';
import { Either } from 'omegup-school';

export interface IUserController {
  signIn(
    data: SignInUserDTO,
    presenter: ISignInPresenter
  ): Promise<Either<void, 'login' | 'network' | 'unknown'>>;
}
