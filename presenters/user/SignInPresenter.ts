import {
  ISignInPresenter,
  SignInErrorHandler,
} from '@omegup-school/user-presenter-port/SignInPresenter';

export * from '@omegup-school/user-presenter-port/SignInPresenter';

export class SignInPresenter implements ISignInPresenter {
  constructor(public presentError: (handleError: SignInErrorHandler) => SignInErrorHandler) {}
}
