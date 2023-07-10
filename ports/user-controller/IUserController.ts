import { SignInUserDTO } from '@omegup-school/user-dtos/SignInUserDTO';
import { SignInErrorHandler } from '@omegup-school/user-presenter-port/SignInPresenter';
import { Either } from 'omegup-school';

export interface IUserController {
  signIn(
    data: SignInUserDTO,
    handleError: SignInErrorHandler
  ): Promise<Either<void, 'login' | 'network' | 'unknown'>>;
}
