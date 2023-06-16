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
} from '@omegup-school/ui-molecules';

type SignInProps = {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
};

export function SignInForm({ onSubmit }: SignInProps) {
  
  return (
    <LoginPanel>
      <SignInBanner />
      <FormPanel onSubmit={onSubmit}>
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
