import { useFacade } from '@omegup-school/hooks';
import { SignIn, SignInFormData } from '@omegup-school/ui-organisms/SignIn';
import { ErrorOption } from 'react-hook-form';


function SignInView() {
  const { signInPresenter, userController } = useFacade();

  const onSubmit = (
    data: SignInFormData,
    handleError: (
      name: keyof SignInFormData | 'root',
      error: ErrorOption,
      options?: {
        shouldFocus: boolean;
      }
    ) => void
  ) => userController.signIn(data, signInPresenter(handleError));

  return <SignIn onSubmit={onSubmit} />;
}

export default SignInView;
