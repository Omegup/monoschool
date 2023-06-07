import { ISignInPresenter } from '@omegup-school/user-presenter-port/SignInPresenter';

export class SignInPresenter implements ISignInPresenter {
  constructor(private handleError: (error: Error) => void) {}

  presentError(error: Error): void {
    this.handleError(error);
  }
}
