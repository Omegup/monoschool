import { UserAPIAdapter } from '@omegup-school/user-adapter';
import { SignInPresenter } from '@omegup-school/user-presenter/SignInPresenter';
import { UserController } from '@omegup-school/user-controller/UserController';
import { SignInUser } from '@omegup-school/user-usecases/signInUser';
import { AuthService } from '@omegup-school/auth-service';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

// Initialize the controller
const userAPIAdapter = new UserAPIAdapter();
const signInUser = new SignInUser(userAPIAdapter);
const userController = new UserController(signInUser, new AuthService());

type SignInFormData = {
  email: string;
  password: string;
};

function SignInView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const [error, setError] = useState<Error>();

  const onSubmit = async (data: SignInFormData) => {
    await userController.signIn(data, new SignInPresenter(setError));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
  );
}

export default SignInView;
