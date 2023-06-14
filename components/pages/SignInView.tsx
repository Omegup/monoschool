import { useFacade } from '@omegup-school/hooks';
import { SignIn } from '@omegup-school/ui-molecules/SignIn';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

// Initialize the controller
type SignInFormData = {
  email: string;
  password: string;
};

function SignInView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignInFormData>();

  const { signInPresenter, userController } = useFacade();

  const [error, setError] = useState<Error>();

  const onSubmit = async (data: SignInFormData) => {
    await userController.signIn(data, signInPresenter(setError));
  };

  return (
    <>
      <SignIn />
      <form style={{ display: 'none' }} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register('email', { required: true })}
          placeholder="Email"
        />
        {errors.email && <p>This field is required</p>}

        <input
          type="password"
          {...register('password', { required: true })}
          placeholder="Password"
        />
        {errors.password && <p>This field is required</p>}

        {error && <p>An error occured</p>}

        <button type="submit">Sign In</button>
      </form>
    </>
  );
}

export default SignInView;
