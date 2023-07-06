import { Logo } from '@omegup-school/ui-assets';
import { Button } from '@omegup-school/ui-atoms/Button';
import { Link } from '@omegup-school/ui-atoms/Link';
import { FormPanel } from '@omegup-school/ui-atoms/Panel/FormPanel';
import { LoginPanel } from '@omegup-school/ui-atoms/Panel/LoginPanel';
import { SpaceBetween } from '@omegup-school/ui-atoms/Panel/SpaceBetween';
import { Select } from '@omegup-school/ui-atoms/Select';
import {
  OutlinedInput,
  SignInBanner,
  SignInHeader,
} from '@omegup-school/ui-atoms/Signin';

type SignInProps = {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
};

export function SignIn({ onSubmit }: SignInProps) {
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
