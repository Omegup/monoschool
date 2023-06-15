import { Logo } from '@omegup-school/ui-assets';
import { Button } from '../Button';
import { Link } from '../Link';
import { FormPanel } from '../Panel/FormPanel';
import { LoginPanel } from '../Panel/LoginPanel';
import { SpaceBetween } from '../Panel/SpaceBetween';
import { Select } from '../Select';
import OutlinedInput from './Input';
import { SignInBanner } from './SignInBanner';
import { SignInHeader } from './SignInHeader';

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
