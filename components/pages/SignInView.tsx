import { useFacade } from '@omegup-school/hooks';
import { SignIn } from '@omegup-school/ui-organisms/SignIn';
import { useState } from 'react';

// Initialize the controller
type SignInFormData = {
  email: string;
  password: string;
};

function SignInView() {
  const { signInPresenter, userController } = useFacade();

  const [_, setError] = useState<Error>();

  const onSubmit = async (data: SignInFormData) => {
    await userController.signIn(data, signInPresenter(setError));
  };

  return <SignIn onSubmit={onSubmit} />;
}



export default SignInView;
