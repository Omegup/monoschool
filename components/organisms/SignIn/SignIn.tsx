import { Logo } from '@omegup-school/ui-assets';
import {
  Button,
  Link,
  FormPanel,
  LoginPanel,
  SpaceBetween,
  SignInBanner,
  OutlinedInput,
  SignInHeader,
} from '@omegup-school/ui-cells/SignIn';
import { Select } from '@omegup-school/ui-cells';

import { UseFormSetError, useForm } from 'react-hook-form';

export type SignInFormData = {
  email: string;
  password: string;
  remember: boolean;
};

export type SignInProps = {
  onSubmit: (
    data: SignInFormData,
    setError: UseFormSetError<SignInFormData>
  ) => void;
};

export function SignIn({ onSubmit }: SignInProps) {
  const { handleSubmit, control, setError } = useForm<SignInFormData>({
    defaultValues: () =>
      new Promise((res) =>
        setTimeout(
          () =>
            res({
              email: '',
              password: '',
              remember: false,
            }),
          1000
        )
      ),
  });
  return (
    <LoginPanel>
      <SignInBanner />
      <FormPanel onSubmit={handleSubmit((data) => onSubmit(data, setError))}>
        <Logo />
        <SignInHeader />
        <OutlinedInput
          control={control}
          placeholder="Tapez votre addresse e-mail ici"
          label="E-mail"
          name="email"
          _
        />
        <OutlinedInput
          control={control}
          placeholder="Tapez votre mot de passe ici"
          label="Mot de passe"
          type="password"
          name="password"
          _
        />
        <SpaceBetween>
          <Select
            _
            label="Se souvenir de moi"
            size="medium"
            style="solid"
            name="remember"
            control={control}
          />
          <Link text="Mot de passe oublié ?" />
        </SpaceBetween>
        <Button label="Connexion" />
      </FormPanel>
    </LoginPanel>
  );
}
