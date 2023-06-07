import { SignInUserDTO } from '@omegup-school/user-dtos/SignInUserDTO';
import { ISignInPresenter } from '@omegup-school/user-presenter-port/SignInPresenter';

export interface IUserController {
  signIn(data: SignInUserDTO, presenter: ISignInPresenter): Promise<void>;
}
