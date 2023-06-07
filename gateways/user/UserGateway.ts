import { SignInUserDTO } from '@omegup-school/user-dtos/SignInUserDTO';
import { User } from '@omegup-school/user-entity';

export interface UserGateway {
  signIn(data: SignInUserDTO): Promise<User>;
}
