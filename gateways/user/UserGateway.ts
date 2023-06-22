import { SignInUserDTO } from '@omegup-school/user-dtos/SignInUserDTO';
import { User } from '@omegup-school/user-entity';
import { Either } from 'omegup-school';

export interface UserGateway {
  signIn(
    data: SignInUserDTO
  ): Promise<Either<User, 'login' | 'network' | 'unknown'>>;
}
