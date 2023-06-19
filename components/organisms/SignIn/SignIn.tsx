import { Logo } from '@omegup-school/ui-assets';
import {
  Button,
  Link,
  FormPanel,
  LoginPanel,
  SpaceBetween,
  Select,
  SignInBanner,
  OutlinedInput,
  SignInHeader,
} from '@omegup-school/ui-cells';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export type SignInFormData = {
  email: string;
  password: string;
};

export type SignInProps = {
  onSubmit: (data: SignInFormData) => void;
};

export function SignIn({ onSubmit }: SignInProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignInFormData>();

  const [error, setError] = useState<Error>();

  return (
    <LoginPanel>
      <SignInBanner />
      <FormPanel onSubmit={handleSubmit(onSubmit)}>
        <Logo />
        <SignInHeader />
        <OutlinedInput
          placeholder="Tapez votre addresse e-mail ici"
          label="E-mail"
        />
        <OutlinedInput
          placeholder="Tapez votre mot de passe ici"
          label="Mot de passe"
          type="password"
        />
        <SpaceBetween>
          <Select label="Se souvenir de moi" size="medium" style="solid" />
          <Link text="Mot de passe oublié ?" />
        </SpaceBetween>
        <Button label="Connexion" />
      </FormPanel>
    </LoginPanel>
  );
}