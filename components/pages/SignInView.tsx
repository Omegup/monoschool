import { useFacade } from '@omegup-school/hooks';
import { SignIn } from '@omegup-school/ui-organisms/SignIn';

function SignInView() {
  const { userController } = useFacade();

  return <SignIn onSubmit={userController.signIn} />;
}

export default SignInView;
