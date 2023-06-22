export type SignInErrorHandler = (
  name: 'email' | 'root',
  error: { message: string },
  options?: {
    shouldFocus: boolean;
  }
) => void
export interface ISignInPresenter {
  presentError: SignInErrorHandler;
}
